import { isEmpty } from 'lodash'
import Link from 'next/link'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { isCustomPageUri } from '../../../utils/slug'
import NavSearch from '../../search/nav-search'
import styled from 'styled-components'

const NavBar = styled('nav')`
  background-color: #470a68;

  .second {
    background-color: #380853;
    width: 100%;
  }

  .container {
    max-width: 1220px;
    margin: 0 auto;
    &.first {
      padding: 10px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &.second {
      width: 100%;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }
  }

  .menu-link {
    letter-spacing: 0.25px;
    font-size: 0.813rem;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 0;
    font-weight: 900;
  }
`

const Nav = ({ header, headerMenus, slug }) => {
  if (isEmpty(headerMenus)) {
    return null
  }

  const [isMenuVisible, setMenuVisibility] = useState(false)

  return (
    <NavBar className="flex items-center justify-between flex-wrap ">
      <div className="container justify-center first">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/" legacyBehavior>
            <a>
              <img
                src={header?.siteLogoUrl ?? ''}
                alt=""
                width="48"
                height="48"
                className="mr-4"
              />
            </a>
          </Link>
          <div className="flex flex-col items-start justify-start">
            <span className="font-semibold text-xl tracking-tight">
              {header?.siteTitle}
            </span>
            <span>{header?.siteTagLine}</span>
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            data-cy="mmenu-btn"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-col-reverse flex lg:flex-row">
          {'search' !== slug ? <NavSearch /> : null}
          <div className="lg:flex items-center"></div>
        </div>
      </div>

      <div className="second">
        <div
          className={`container justify-center ${
            isMenuVisible ? 'max-h-full' : 'h-0'
          } overflow-hidden w-full lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          {headerMenus?.length ? (
            <>
              {headerMenus?.map((menu) => {
                if (!isCustomPageUri(menu?.node?.path)) {
                  return (
                    <Link
                      key={menu?.node.id}
                      href={menu?.node?.path}
                      legacyBehavior
                    >
                      <a
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 menu-link"
                        data-cy="nav-item"
                      >
                        {menu?.node?.label}
                      </a>
                    </Link>
                  )
                }
              })}
              <Link href={'/blog/'} legacyBehavior>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 menu-link"
                  data-cy="nav-item"
                >
                  Blog
                </a>
              </Link>
              <Link href={'/news/'} legacyBehavior>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 menu-link"
                  data-cy="nav-item"
                >
                  News
                </a>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </NavBar>
  )
}

Nav.propTypes = {
  header: PropTypes.object,
  headerMenus: PropTypes.array,
  slug: PropTypes.string,
}

Nav.defaultProps = {
  header: {},
  headerMenus: [],
  slug: '',
}

export default Nav
