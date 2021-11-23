import { Chip } from "@material-ui/core";
import { format, parseISO } from "date-fns";
import MUIDataTable, { MUIDataTableColumn } from "mui-datatables";
import { useEffect, useState } from "react";
import { httpVideo } from "../../util/http";

const columnsDefinitions: MUIDataTableColumn[] = [
    {
        name: "name",
        label: "Nome"
    },
    {
        name: "is_active",
        label: "Ativo?",
        options: {
            customBodyRender(value, tableMeta, updateValue){
                return value ? <Chip label="Sim" color="primary"/> : <Chip label="Nao" color="secondary"/>
            }
        }
    },
    {
        name: "created_at",
        label: "Criado em",
        options: {
            customBodyRender(value, tableMeta, updateValue){

                return <span>{format(parseISO(value),'dd/MM/yyyy')}</span>
            }
        }
    }
]

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        httpVideo.get('categories').then(response => {
            console.log("Data: ", response.data.data);
            setData(response.data.data)
        }
        )
    }, []);
    return (
        <MUIDataTable 
            title="Listagem de categorias"
            columns={columnsDefinitions}
            data={data}
        >

        </MUIDataTable>

    )
}

export default Table;