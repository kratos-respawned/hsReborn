import { m } from "framer-motion"
import AllTeam from "../AllTeam/AllTeam"
function EventCards() {
    return (
        <m.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="w-full h-full"
        >
            <AllTeam />

        </m.div>
    )
}

export default EventCards