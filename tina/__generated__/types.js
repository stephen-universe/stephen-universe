export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const SettingsPartsFragmentDoc = gql`
    fragment SettingsParts on Settings {
  __typename
  siteSettings {
    __typename
    siteName
    siteOwner
  }
  preloader {
    __typename
    image
    alt
  }
  companyLogo {
    __typename
    image
    alt
  }
  social {
    __typename
    fb {
      __typename
      title
      link
    }
    ig {
      __typename
      title
      link
    }
    github {
      __typename
      title
      link
    }
    linkedin {
      __typename
      title
      link
    }
  }
}
    `;
export const NavigationPartsFragmentDoc = gql`
    fragment NavigationParts on Navigation {
  __typename
  navigationLinks {
    __typename
    link
    heading {
      __typename
      mainText
      subText
    }
    text
  }
}
    `;
export const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  footerLinks {
    __typename
    text
    url
    className
  }
  footerText {
    __typename
    text1
    text2
  }
}
    `;
export const ContentPartsFragmentDoc = gql`
    fragment ContentParts on Content {
  __typename
  rotatingWords
  introLines {
    __typename
    line1
    line2
    line3
    line4
  }
  doorMessages {
    __typename
    message1
    message2
    message3
  }
  coreSystems {
    __typename
    title
    desc
    skills {
      __typename
      skill1
      skill2
      skill3
      skill4
      skill5
    }
  }
  fieldSystems {
    __typename
    title
    desc
    skills {
      __typename
      skill1
      skill2
      skill3
      skill4
      skill5
    }
  }
  combinedStatement {
    __typename
    statement1
    statement2
  }
  projectSection {
    __typename
    title
    projects {
      __typename
      image1
      url1
      image2
      url2
      image3
      url3
      image4
      url4
    }
    viewAllLink {
      __typename
      text
      url
    }
  }
  quote {
    __typename
    lines {
      __typename
      line
    }
    attribution {
      __typename
      signature
      source
    }
  }
  timedQuote {
    __typename
    quoteParts {
      __typename
      text
      delay
    }
  }
  contact {
    __typename
    link
    buttonText
  }
}
    `;
export const ProjectsPartsFragmentDoc = gql`
    fragment ProjectsParts on Projects {
  __typename
  projects {
    __typename
    logofolio {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        images {
          __typename
          white
          black
        }
        image
      }
    }
    anaRose {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        image
      }
    }
    queendomFarms {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        image
      }
    }
    epicFuture {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        image
      }
    }
    consolidatedConstructionSolutions {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        image
      }
    }
    perfectlyDifferent {
      __typename
      meta {
        __typename
        title
        description
        speed
        url
      }
      project {
        __typename
        title
        description
        image
      }
    }
  }
}
    `;
export const SettingsDocument = gql`
    query settings($relativePath: String!) {
  settings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SettingsParts
  }
}
    ${SettingsPartsFragmentDoc}`;
export const SettingsConnectionDocument = gql`
    query settingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingsFilter) {
  settingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SettingsParts
      }
    }
  }
}
    ${SettingsPartsFragmentDoc}`;
export const NavigationDocument = gql`
    query navigation($relativePath: String!) {
  navigation(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...NavigationParts
  }
}
    ${NavigationPartsFragmentDoc}`;
export const NavigationConnectionDocument = gql`
    query navigationConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: NavigationFilter) {
  navigationConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...NavigationParts
      }
    }
  }
}
    ${NavigationPartsFragmentDoc}`;
export const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
export const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
export const ContentDocument = gql`
    query content($relativePath: String!) {
  content(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContentParts
  }
}
    ${ContentPartsFragmentDoc}`;
export const ContentConnectionDocument = gql`
    query contentConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContentFilter) {
  contentConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContentParts
      }
    }
  }
}
    ${ContentPartsFragmentDoc}`;
export const ProjectsDocument = gql`
    query projects($relativePath: String!) {
  projects(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ProjectsParts
  }
}
    ${ProjectsPartsFragmentDoc}`;
export const ProjectsConnectionDocument = gql`
    query projectsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ProjectsFilter) {
  projectsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ProjectsParts
      }
    }
  }
}
    ${ProjectsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    settings(variables, options) {
      return requester(SettingsDocument, variables, options);
    },
    settingsConnection(variables, options) {
      return requester(SettingsConnectionDocument, variables, options);
    },
    navigation(variables, options) {
      return requester(NavigationDocument, variables, options);
    },
    navigationConnection(variables, options) {
      return requester(NavigationConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    },
    content(variables, options) {
      return requester(ContentDocument, variables, options);
    },
    contentConnection(variables, options) {
      return requester(ContentConnectionDocument, variables, options);
    },
    projects(variables, options) {
      return requester(ProjectsDocument, variables, options);
    },
    projectsConnection(variables, options) {
      return requester(ProjectsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
