import { motion, AnimatePresence } from "@framer"
import * as React from "react"
import { useState } from "react"

const style = {
    width: 100,
    height: 100,
    background: "red",
    opacity: 1,
}

const styleB = {
    width: 100,
    height: 100,
    background: "green",
    opacity: 1,
}

export const App = () => {
    const [isVisible, setVisible] = useState(true)
    const [count, setCount] = useState(0)

    React.useEffect(() => {
        setTimeout(() => {
            setVisible(false)
        }, 1000)
    }, [])

    return (
        <div>
            <motion.div
                positionTransition
                style={{ padding: 20, background: "white", width: 100 }}
            >
                <AnimatePresence
                    initial={false}
                    onRest={() => console.log("rest")}
                    _syncLayout={() => setCount(count + 1)}
                >
                    {isVisible && (
                        <motion.div
                            key="a"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                            style={style}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
            <motion.div positionTransition style={style} />
        </div>
    )
}