import React from "react";
import Modal from "./modal";
import style from "./mathPuzzle.module.css"

const puzzleButton = {
  backgroundColor: '#a6ddd9',
padding: '.5rem 0',
width: '9em',
fontSize: '1rem',
color: '#fff',
margin: '2rem 0',
borderRadius: '0.25em',
border: '1px solid #fff'
};

class MathPuzzle extends React.Component {
  state = {
    show: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <Modal onClose={this.showModal} show={this.state.show}>
          <p className={style.solutions}>{this.props.solution}</p>
        </Modal>
        <button style={puzzleButton}
                type="button" 
          className="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          Show Answer{" "}
        </button>
      </div>
    );
  }
}

export default MathPuzzle;
