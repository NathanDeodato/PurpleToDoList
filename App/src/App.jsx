// React
import React, { Component } from "react"

// Style
import "./App.css"

// Icons
import {home, deletee} from "../src/Assets"

export default class AppToDoList extends Component {
  state = {
    toDo: "",
    toDoList: []
  }

  handleChang = (event) => {
    this.setState ({
      toDo: event.target.value
    })
  }

  addToDo = () => {
    this.setState ({
      toDoList: this.state.toDoList.concat(this.state.toDo)
    })
  }
  
  render() {
    return (
      <div>

        <header>
          
          <a href="https://purplesystem.netlify.app/">

            <img className="systemHome" src={home}></img>

          </a>

            <h1 className="title">
              Purple ToDoList
            </h1>
          
        </header>

        <main>
          
          <section className="toDoListContainer">
            
            <section className="toDoBox">
              
              <input className="inputToDo" type="text" value={this.state.toDo} onChange={this.handleChang}>
              
              </input>

              <button className="toDoAdd" onClick={this.addToDo}>
                +
              </button>

            </section>

            {/* <hr className="divisorToDo"></hr> */}

            <section className="toDoListBox">
              {this.state.toDoList.map((item) =>
                
                <section className="toDoMiniBox">
                  
                  <p className="itemToDo">{item}</p>
                  
                  <section className="itemDeleteBox">
                    <img className="itemDelete" src={deletee}></img>
                  </section>

                </section>
            
              )}
            </section>

          </section>

        </main>

        <footer>
          
          <h4>
            &copy; Deodatont 2022
          </h4>

        </footer>

      </div>
    )
  }
}