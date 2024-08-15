import React, { useState } from 'react'

export const SearchTable = () => {
    const tableHeader = ['SKU','PRODUCT','PRICE','STOCK']
    const product= [
        {
            'sku': '02211',
            'name': 'Name product #1',
            'price': '1656',
            'stock': '96',
        },
        {
            'sku': '066826',
            'name': 'Name product #2',
            'price': '999',
            'stock': '108',
        },
        {
            'sku': '090099',
            'name': 'Name product #3',
            'price': '6999',
            'stock': '10',
        },
        {
            'sku': '109872',
            'name': 'Name product #4',
            'price': '6855',
            'stock': '5',
        },
        {
            'sku': '112358',
            'name': 'Name product #5',
            'price': '25',
            'stock': '800',
        },        
    ]
  return (
        <section className='section-table-search'>
            <table className='productsTable'>
                <thead>
                    <tr>
                    {
                        tableHeader.map((header, index) => {
                            return(
                                <th key={index}>
                                    {header}
                                </th>
                            )
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                       product.map((element,index) => {
                        return(
                            <tr key={index}>
                            <td>
                                {element.sku}
                            </td>
                            <td>
                                {element.name}
                            </td>
                            <td>
                                ${element.price}
                            </td>
                            <td>
                                #{element.stock}
                            </td>
                        </tr>
                        )
                       })
                    }
                </tbody>
            </table>
        </section>
  )
}
