import React, { useState } from "react"
import { motion } from "framer-motion"


const container = {
  hidden: { scale: [0, 1], top: 100 },
  show: {
    scale: 1, top: 0,
    transition: {
      staggerChildren: 0.3,
            // delayChildren: 1,
    },
  },
}
const itemA = {
  hidden: { scale: [0, 1], top: 100 },

  show: { scale: [0,1], top: 0 },
}


export default function TextForm({ mids, shawty, darkMode, setDarkMode }) {
  const [text, settext] = useState("")


  const HandlerofText = () => {
    const CapsText = text.toUpperCase()
    settext(CapsText)
  }

  const HandlerofDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <motion.div
      variants={container}
      initial="hidden"
      animate = "show"
      className={`screen ${darkMode === true? 'dark-mode': 'white-mode'}`} >

        <motion.div variants={container} className="mx-3 my-2">
          {text.trim().length > 0 ? (
            <h4>
              {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
              {text.length} characters
            </h4>
          ) : (
            <h4>Please enter some text.</h4>
          )}
        </motion.div>

        <div className="mb-3">
          <label
            style={{ margin: "25px" }}
            for="exampleFormControlTextarea1"
            className="form-label"
          >
            {mids}, {shawty}
          </label>
          <motion.div 
          animate = {darkMode === false? "show": "hidden"}
          variants={itemA} className="form-container">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={(e) => settext(e.target.value)}
            ></textarea>
          </motion.div>

          <motion.div variants={itemA} style={{ marginTop: "25px", textAlign: "center" }}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={HandlerofText}
            >
              UpperCase
            </button>
            <button
              className={`btn ${darkMode === true? "btn-light": "btn-dark"}`}
              type="button"
              onClick={HandlerofDarkMode}
            >
              {darkMode === false? "Dark Mode": "Light Mode"}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
