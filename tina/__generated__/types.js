export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const SettingPartsFragmentDoc = gql`
    fragment SettingParts on Setting {
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
  footerLinks {
    __typename
    react {
      __typename
      text
      url
    }
    nextjs {
      __typename
      text
      url
    }
    framer {
      __typename
      text
      url
    }
    tina {
      __typename
      text
      url
    }
  }
  footerText {
    __typename
    text1
    text2
  }
}
    `;
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
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
      line1
      line2
      line3
      line4
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
      part1 {
        __typename
        text1
        delay1
      }
      part2 {
        __typename
        text2
        delay2
      }
      part3 {
        __typename
        text3
        delay3
      }
      part4 {
        __typename
        text4
        delay4
      }
      part5 {
        __typename
        text5
        delay5
      }
      part6 {
        __typename
        text6
        delay6
      }
      part7 {
        __typename
        text7
        delay7
      }
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
        images {
          __typename
          white
          black
        }
        title
        description
      }
    }
    anarose {
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
        image
        title
        description
        goals
        challenges
        solutions
        link
        video
      }
    }
    queendomfarms {
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
        image
        title
        description
        goals
        challenges
        solutions
        link
        video
      }
    }
    epicfuture {
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
        image
        title
        description
        goals
        challenges
        solutions
        link
        video
      }
    }
    consolidatedconstructionsolutions {
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
        image
        title
        description
        goals
        challenges
        solutions
        link
        video
      }
    }
    perfectlydifferent {
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
        image
        title
        description
        goals
        challenges
        solutions
        link
        video
      }
    }
  }
}
    `;
export const SettingDocument = gql`
    query setting($relativePath: String!) {
  setting(relativePath: $relativePath) {
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
    ...SettingParts
  }
}
    ${SettingPartsFragmentDoc}`;
export const SettingConnectionDocument = gql`
    query settingConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SettingFilter) {
  settingConnection(
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
        ...SettingParts
      }
    }
  }
}
    ${SettingPartsFragmentDoc}`;
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
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
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
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
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
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
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
    setting(variables, options) {
      return requester(SettingDocument, variables, options);
    },
    settingConnection(variables, options) {
      return requester(SettingConnectionDocument, variables, options);
    },
    navigation(variables, options) {
      return requester(NavigationDocument, variables, options);
    },
    navigationConnection(variables, options) {
      return requester(NavigationConnectionDocument, variables, options);
    },
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
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
