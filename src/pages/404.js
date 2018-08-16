/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper';
import Header from '../components/Header';
import { media } from '../utils/media';

import config from '../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.white};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;

const NotFoundPage = props => (
  <Layout>
    <Wrapper>
      <Helmet title={`404 Not Found | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Route not found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
        {props.data.allSitePage.totalCount > 1 && (
          <div>
            <p>If you were trying to reach another page, perhaps you can find it below.</p>
            <h2>Pages ({props.data.allSitePage.totalCount})</h2>
            <ul>
              {props.data.allSitePage.edges.map(({ node }) => (
                <li>
                  <Link to={node.path}>{node.path}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Content>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPage {
    allSitePage {
      totalCount
      edges {
        node {
          path
        }
      }
    }
  }
`;
