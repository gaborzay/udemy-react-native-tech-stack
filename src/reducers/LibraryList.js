import React, {Component} from "react";
import {connect} from "react-redux";

class LibraryList extends Component {
    render() {
        return this.props;
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    };
};

export default connect(mapStateToProps)(LibraryList);