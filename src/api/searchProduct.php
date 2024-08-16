<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Include the database connection
include_once('./connection.php');

// Connect to the database
$conn = connectBD();

// Read JSON data from the body of the request
$jsonData = file_get_contents("php://input");

if ($jsonData === '') {
    echo ('Waiting for request...');
} else {
    // Decode JSON to PHP array
    $formData = json_decode($jsonData, true);

    // Check if the decoding was successful
    if (json_last_error() === JSON_ERROR_NONE) {
        // Check if 'searchProduct' is present in the decoded data
        if (isset($formData['searchProduct']) && !empty($formData['searchProduct'])) {
            $searchProduct = $formData['searchProduct'];

            // Prepare the SQL query using parameters
            $sql = "SELECT * FROM products WHERE name LIKE ?";
            if ($stmt = $conn->prepare($sql)) {
                // Add '%' before and after the value to perform the LIKE search
                $param = "%{$searchProduct}%";
                $stmt->bind_param("s", $param);

                // Execute the query
                $stmt->execute();

                // Get the results
                $result = $stmt->get_result();
                $rows = $result->fetch_all(MYSQLI_ASSOC);

                // Return the results in JSON format
                echo json_encode($rows);

                // Close the statement
                $stmt->close();
            } else {
                echo json_encode(['error' => 'Failed to prepare the SQL statement']);
            }
        } else {
            echo json_encode(['error' => 'Missing or empty "searchProduct" parameter']);
        }
    } else {
        // Return JSON error if decoding failed
        echo json_encode(['error' => 'Invalid JSON']);
    }
}

// Close the database connection
$conn->close();
?>