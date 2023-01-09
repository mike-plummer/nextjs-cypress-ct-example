import { Button } from "@mui/material";
import LeftChevron from "@mui/icons-material/ChevronLeft"
import { useRouter  } from "next/router";

export default function BackButton() {
    const router = useRouter()
    
    return (
        <Button variant="outlined" startIcon={<LeftChevron />} onClick={router.back}>
            Back
        </Button>
    )
}