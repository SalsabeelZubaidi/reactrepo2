import React from"react";
import './NavigationBar.css';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: "",
    }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", this.state.email, this.state.password);
      };




    render()
    {
        return(<div>
            <form onSubmit={this.handleSubmit} class="fromc"> <label>Email
                <input type="email" value={this.state.value} onChange={this.handleChange} />
                </label> <br/>
                <label> Password <input type="password" value={this.state.value} /></label> <br/>
                <button type="submit"> sumbit </button>
            </form>

        </div>)
    }

}

export default Home;
