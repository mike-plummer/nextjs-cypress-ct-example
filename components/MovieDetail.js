import { Box, Divider, Typography} from '@mui/material'

export default function MovieDetail(props) {
    return (
        <Box>
            <Typography variant="h6">Title</Typography>
            <Divider />
            <Typography>{props.movie.Title}</Typography>

            <Typography variant="h6">Year</Typography>
            <Divider />
            <Typography>{props.movie.Year}</Typography>

            <Typography variant="h6">Plot</Typography>
            <Divider />
            <Typography>{props.movie.Plot}</Typography>
        </Box>
    )
}