import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn";
import "./Save.css";

class Save extends Component {
    state = {
        title: "",
        date: "",
        url: ""
    };

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Saved Articles</h1>
                </Jumbotron>
                {this.props.saved.length ? (
                    <List>
                        {this.props.saved.map(article => (
                            <ListItem key={article._id}>
                                <Link to={"/articles/" + article._id}>
                                    <strong>
                                        {article.title}
                                    </strong>
                                </Link>
                                <DeleteBtn
                                    id={"delete" + article._id}
                                    onClick={() => this.props.deleteArticle(article._id)}
                                />
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </div>
        );
    }
}

export default Save;