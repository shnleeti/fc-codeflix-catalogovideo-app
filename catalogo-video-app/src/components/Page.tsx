import { Box, Container, makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    title: {
        color: '#999999'
    }
})

type PageProps = {
    title: string
}

export const Page:React.FC<PageProps> = (props) => {

    const classes = useStyles();

    return (
        <Container>
            <Typography className={classes.title} variant={'h5'}>
                {props.title}
            </Typography>
            <Box paddingTop={1}>
                {props.children}
            </Box>
        </Container>
    )
}