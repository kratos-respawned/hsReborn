import { m } from "framer-motion"
import ImageCard from "./ImageCard"

function EventCards() {
    return (
        <m.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="px-7"
        >
            <section className=" py-24 relative ">
                <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                    <ImageCard
                        designation="Team Members > "
                        image="/Team/akm.png"
                        name="Branding Team"
                    />
                </div>
            </section>
        </m.div>
    )
}

export default EventCards