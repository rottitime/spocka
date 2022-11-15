import PropTypes from 'prop-types'
import { SearchIcon } from '../icons'
import styled from 'styled-components'

const Form = styled('form')`
  position: relative;
  width: 200px;
  height: 50px;

  input {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 500px;
    padding: 0 3rem 0 2rem;
    border: 2px solid transparent;
    outline: none;
    appearance: none;
  }
`

const SearchForm = ({
  searchQuery,
  setSearchQuery,
  handleSearchFormSubmit,
}) => {
  return (
    <Form
      className="flex w-full justify-center"
      onSubmit={handleSearchFormSubmit}
    >
      <div className="block relative w-4/5">
        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="h-4 w-4 fill-current text-gray-500" />
        </span>
        <input
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className=""
        />
      </div>
      {/* <input
        type="submit"
        value="Search"
        onClick={handleSearchFormSubmit}
        className="cursor-pointer	text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"/> */}
    </Form>
  )
}

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
  handleSearchFormSubmit: PropTypes.func,
}

SearchForm.defaultProps = {
  searchQuery: '',
  setSearchQuery: () => null,
  handleSearchFormSubmit: () => null,
}

export default SearchForm
