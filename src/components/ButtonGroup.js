import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import MdHome from 'react-icons/lib/md/home';
import MdEmail from 'react-icons/lib/md/email';
import MdCategory from 'react-icons/lib/md/label';

import Button from '../components/Button';
import config from '../../config/SiteConfig';

const FlexParent = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const FlexChild = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
`;

const ButtonGroup = () => (
  <FlexParent>
    <FlexChild>
      <a href={config.portfolioWebsiteUrl}>
        <Button big>
          <MdHome />
          Portfolio Website
        </Button>
      </a>
    </FlexChild>
    <FlexChild>
      <Link to="/contact">
        <Button big>
          <MdEmail />
          Contact
        </Button>
      </Link>
    </FlexChild>
    <FlexChild>
      <Link to="/categories">
        <Button big>
          <MdCategory />
          Categories
        </Button>
      </Link>
    </FlexChild>
  </FlexParent>
);

export default ButtonGroup;
