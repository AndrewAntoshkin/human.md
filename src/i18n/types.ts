export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    collection: string;
    people: string;
    about: string;
    cart: string;
  };
  home: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      collectionLabel: string;
      collectionVersion: string;
      collectionName: string;
      subtitle: string;
      exploreCollection: string;
      readAbout: string;
    };
    intro: {
      line1: string;
      line2: string;
      signature: string;
    };
    collection: {
      title: string;
      version: string;
      name: string;
      subtitle: string;
      objectCount: string;
    };
    featured: {
      statement: string;
      description: string;
      viewObject: string;
    };
    manifesto: {
      title: string;
      paragraphs: string[];
      principle: string;
      readAbout: string;
    };
    people: {
      title: string;
    };
    principles: {
      title: string;
      intro: string[];
      items: {
        title: string;
        lines: string[];
      }[];
    };
  };
  hero: {
    collectionLabel: string;
    version: string;
    objects: string;
    material: string;
  };
  product: {
    name: string;
    view: string;
    front: string;
    back: string;
    backToCollection: string;
  };
  productPage: {
    backToCollection: string;
    inStock: string;
    size: string;
    addToCart: string;
    viewDetails: string;
    description: string;
    fitSizing: string;
    shipping: string;
    care: string;
    relatedTitle: string;
    viewAll: string;
    specs: string[];
    detailsItems: string[];
    shippingItems: string[];
    careItems: string[];
    gallery: {
      flat: string;
      front: string;
      back: string;
      fabric: string;
      print: string;
      detail: string;
    };
  };
  preorder: {
    cta: string;
    title: string;
    color: string;
    size: string;
    name: string;
    email: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    close: string;
    colors: {
      white: string;
      black: string;
    };
  };
  footer: {
    copyright: string;
    signature: string;
    instagram: string;
    telegram: string;
    handle: string;
  };
  stayHuman: {
    title: string;
    label: string;
    placeholder: string;
    cta: string;
    disclaimer: string;
    success: string;
  };
  peoplePage: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      paragraphs: string[];
      archiveLabel: string;
      humanCount: string;
      imageAlt: string;
    };
    intro: {
      headline: string;
      lines: string[];
    };
    featured: {
      label: string;
      currentFocus: string;
    };
    statement: {
      headline: string;
      lines: string[];
    };
    archiveForm: {
      title: string;
      text: string;
      fields: {
        name: string;
        label: string;
        type: string;
        placeholder: string;
        required: boolean;
      }[];
      cta: string;
      success: string;
      disclaimer: string[];
    };
    footer: {
      archiveLabel: string;
      copyright: string;
      tagline: string;
      signature: string;
    };
    personPage: {
      backToArchive: string;
      interview: string;
      principles: string;
      identity: string;
      currentContext: string;
      favoritePiece: string;
      status: string;
      environment: string;
    };
  };
  aboutPage: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      title: string;
      subtitle: string;
      body: string;
    };
    sections: {
      section01: string;
      section02: string;
      section03: string;
      section04: string;
      section05: string;
      section06: string;
      section07: string;
      section08: string;
    };
    section01: {
      headline: string;
      body: string;
    };
    section02: {
      headline: string;
      body: string;
    };
    section03: {
      headline: string;
      body: string;
    };
    section04: {
      headline: string;
      body: string;
    };
    section05: {
      headline: string;
      body: string;
    };
    section06: {
      headline: string;
      body: string;
    };
    section07: {
      headline: string;
      body: string;
    };
    section08: {
      headline: string;
      body: string;
    };
    photos: {
      personBack: string;
      workspace: string;
      streetWalk: string;
      fabricMacro: string;
    };
  };
};
