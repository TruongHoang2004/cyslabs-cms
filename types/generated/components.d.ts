import type { Schema, Struct } from '@strapi/strapi';

export interface ContentMetaPair extends Struct.ComponentSchema {
  collectionName: 'components_content_meta_pairs';
  info: {
    displayName: 'meta-pair';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentTag extends Struct.ComponentSchema {
  collectionName: 'components_content_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionCustomers extends Struct.ComponentSchema {
  collectionName: 'components_section_customers';
  info: {
    description: '';
    displayName: 'customers';
  };
  attributes: {
    customers: Schema.Attribute.Relation<'oneToMany', 'api::customer.customer'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_section_hero_sections';
  info: {
    description: '';
    displayName: 'hero-section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'content.tag', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionQuestions extends Struct.ComponentSchema {
  collectionName: 'components_section_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    answers: Schema.Attribute.Component<'content.meta-pair', true>;
    question: Schema.Attribute.String;
  };
}

export interface SectionServices extends Struct.ComponentSchema {
  collectionName: 'components_section_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionTeam extends Struct.ComponentSchema {
  collectionName: 'components_section_teams';
  info: {
    description: '';
    displayName: 'team';
  };
  attributes: {
    employees: Schema.Attribute.Relation<'oneToMany', 'api::employee.employee'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.meta-pair': ContentMetaPair;
      'content.tag': ContentTag;
      'section.customers': SectionCustomers;
      'section.hero-section': SectionHeroSection;
      'section.questions': SectionQuestions;
      'section.services': SectionServices;
      'section.team': SectionTeam;
    }
  }
}
