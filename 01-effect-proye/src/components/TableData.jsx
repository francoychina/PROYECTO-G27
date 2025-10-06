

const TableData = ({data, headers}) => {

    // console.log("TableData", data)
    /*
    return (
    <table>            
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
            </tr>
        </thead>        
        <tbody>
            {data.map((item) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.tipe}</td>
                </tr>              
            ))}
            
        </tbody>
    </table>
    )
}
    */

    return (
        <table className="border-collapse border-t-2 w-full">
            <thead>
                <tr>
                    {headers.map((item, index) => (
                        <th key={index} className="px-4 py-2">
                            {item.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/*recorre todos los productos*/}
                {data &&
                data.map((item) => (
                <tr key={item.id}>
                    {headers.map((head, index) => (
                        <td key= {index} className="border-t-2 px-4 py-2">
                            {item[head.name] }
                        </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    )
}  

  

export default TableData;