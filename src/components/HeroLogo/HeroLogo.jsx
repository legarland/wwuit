import React, { Component } from "react"
import styled from "styled-components"

const MainText = styled.h1`
  color: #fff;
  font-size: 4rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
`
const OffsetText = styled.div`
  display: inline-block;
  position: relative;
  bottom: -0.02em;
  font-size: 0.8em;
`
export default class HeroLogo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loopNum: 0,
      words: ["reduce()", "map()", "filter()", "clone()"],
      isDeleting: true,
      txt: ""
    }
  }

  componentDidMount = () => {
    this.tick()
  }

  tick = () => {
    const { loopNum, words, isDeleting, txt } = this.state
    const i = loopNum % words.length
    const fullTxt = words[i]
    let newDeleting = isDeleting
    let newLoopnum = loopNum
    let newTxt = txt

    if (isDeleting) newTxt = fullTxt.substring(0, newTxt.length - 1)
    else newTxt = fullTxt.substring(0, newTxt.length + 1)

    let delta = 300 - Math.random() * 100
    if (isDeleting) delta /= 2

    if (!isDeleting && newTxt === fullTxt) {
      delta = 1500
      newDeleting = true
    } else if (isDeleting && newTxt === "") {
      newDeleting = false
      newLoopnum += 1
      delta = 500
    }

    this.setState({
      txt: newTxt,
      loopNum: newLoopnum,
      isDeleting: newDeleting
    })

    setTimeout(() => {
      this.tick()
    }, delta)
  }

  render() {
    return (
      <MainText>
        &#123; <OffsetText>When would I use {`${this.state.txt}|`}</OffsetText>{" "}
        &#125;
      </MainText>
    )
  }
}
