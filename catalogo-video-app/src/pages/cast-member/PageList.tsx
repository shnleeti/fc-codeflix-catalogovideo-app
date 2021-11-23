import { Box, Fab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import AddIcon from "@material-ui/icons/Add";
import Table from "./Table";

const PageList = () => {
    return (
        <Page title={'Listagem de membros de elenco'}>
            <Box dir={'rtl'}>
                <Fab
                    title='Adicionar membro'
                    size="small"
                    component={Link}
                    to="/cast-members/create"
                >
                    <AddIcon/>
                </Fab>
            </Box>
            <Box>
                <Table></Table>
            </Box>
        </Page>
    )
}

export default PageList;