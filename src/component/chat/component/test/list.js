import React from 'react';

const List = () => {
    return (
        <div>

        </div>
    );
};

export default List;


class List extends Component {



    render() {
        return (
            <div>
                <button
                    onClick={this.props.getUsers}
                >
                    CLICK HERE TO GET USERS
                </button>
                <ul>
                    {this.renderUsers(this.props.users)}
                </ul>
            </div>
        )
    }
}

export default List;