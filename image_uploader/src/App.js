import React, { Component } from "react";
import "./App.css";
class App extends Component {
    state = {
        image: null,
        image_url: null,
    };

    onImageChange = (event) => {
        this.setState({ image: event.target.files[0] });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", this.state.image);
        fetch("http://localhost:3000/images", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((image) => this.setState({ image_url: image.image_url }))
            .catch((error) => console.log(error));
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="file"
                        accept="image/*"
                        multiple={false}
                        onChange={this.onImageChange}
                    />
                    <input type="submit" value="submit" />
                </form>
                {this.state.image_url && <img src={this.state.image_url} />}
            </div>
        );
    }
}

export default App;
