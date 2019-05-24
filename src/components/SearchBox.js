import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Textfield from './Textfield';
import Button from './Button';

class SearchBox extends Component {
    searchModel = { search: '' };

    handleKeyPress = target => {
        if (target.charCode == 13) {
            this.onSubmit();
        }
    };

    onSubmit = () => {
        const { onSearchClick } = this.props;
        onSearchClick(this.searchModel.search);
    };

    render() {
        const { placeholder } = this.props;
        return (
            <div>
                <Textfield
                    onKeyPress={this.handleKeyPress}
                    name="search"
                    placeholder={placeholder}
                    model={this.searchModel}
                    style={{ display: 'inline' }}
                />
                <Button onClick={this.onSubmit}>Search</Button>
            </div>
        );
    }
}

SearchBox.defaultProps = {
    placeholder: 'Search here!!',
};

SearchBox.propTypes = {
    onSearchClick: PropTypes.func.isRequired,
};

export default SearchBox;
