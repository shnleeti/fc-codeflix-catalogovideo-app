import { format, parseISO } from "date-fns";
import MUIDataTable, { MUIDataTableColumn } from "mui-datatables";
import { useEffect, useState } from "react";
import { httpVideo } from "../../util/http";

const CastMemberTypeConstEnum = {
    1: 'Diretor',
    2: 'Ator'
};

const columnsDefinitions: MUIDataTableColumn[] = [
      {
        name: "name",
        label: "Nome",
      },
      {
        name: "type",
        label: "Tipo",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            // return value
            return CastMemberTypeConstEnum[value];
          },
        },
      },
      {
        name: "created_at",
        label: "Criado em",
        // width: "10%",
        options: {
        //   filter: false,
          customBodyRender(value, tableMeta, updateValue) {
            return <span>{format(parseISO(value), "dd/MM/yyyy")}</span>;
          },
        },
      },
]

const Table = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        httpVideo.get('cast_members').then(response => {
            console.log("Data: ", response.data.data);
            setData(response.data.data)
        }
        )
    }, []);
    return (
        <MUIDataTable 
            title="Listagem de membros do elenco"
            columns={columnsDefinitions}
            data={data}
        >

        </MUIDataTable>

    )
}

export default Table;