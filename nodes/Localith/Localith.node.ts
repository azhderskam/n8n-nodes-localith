
import {
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';

export class Localith implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Localith',
    name: 'localith',
    icon: 'file:localith.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with the Localith API',
    defaults: { name: 'Localith' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{ name: 'localithApi', required: true }],
    requestDefaults: {
      baseURL: 'https://embedsocial.com/app/api',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    properties: [
      {
        displayName: 'Resource',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
          { name: 'Item', value: 'item' },
          { name: 'Listing', value: 'listing' },
          { name: 'Listing Metrics', value: 'listingMetrics' },
          { name: 'Listing Item Metrics', value: 'listingItemMetrics' },
          { name: 'Content Publishing Media', value: 'contentPublishingMedia' },
        ],
        default: 'listing',
      },

      // ITEM
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['item'] } },
        options: [
          {
            name: 'Get Many',
            value: 'getAll',
            description: 'Retrieve the collection of items',
            action: 'Get many items',
            routing: { request: { method: 'GET', url: '/rest/v1/items' } },
          },
        ],
        default: 'getAll',
      },

      // LISTING
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['listing'] } },
        options: [
          {
            name: 'Get Many',
            value: 'getAll',
            description: 'Retrieve the collection of listings',
            action: 'Get many listings',
            routing: { request: { method: 'GET', url: '/rest/v1/listings' } },
          },
          {
            name: 'Get',
            value: 'get',
            description: 'Retrieve a single listing by ID',
            action: 'Get a listing',
            routing: {
              request: {
                method: 'GET',
                url: '=/rest/v1/listings/{{$parameter["listingId"]}}',
              },
            },
          },
          {
            name: 'Update',
            value: 'update',
            description: 'Update a listing by ID',
            action: 'Update a listing',
            routing: {
              request: {
                method: 'PATCH',
                url: '=/rest/v1/listings/{{$parameter["listingId"]}}',
              },
            },
          },
        ],
        default: 'getAll',
      },

      {
        displayName: 'Listing ID',
        name: 'listingId',
        type: 'string',
        required: true,
        default: '',
        description: 'The ID of the listing',
        displayOptions: {
          show: { resource: ['listing'], operation: ['get', 'update'] },
        },
      },

      {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
          show: { resource: ['listing'], operation: ['update'] },
        },
        options: [
          {
            displayName: 'Name',
            name: 'name',
            type: 'string',
            default: '',
            routing: { send: { type: 'body', property: 'name' } },
          },
          {
            displayName: 'Status',
            name: 'status',
            type: 'string',
            default: '',
            routing: { send: { type: 'body', property: 'status' } },
          },
          {
            displayName: 'Description',
            name: 'description',
            type: 'string',
            typeOptions: { rows: 3 },
            default: '',
            routing: { send: { type: 'body', property: 'description' } },
          },
        ],
      },

      // LISTING METRICS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['listingMetrics'] } },
        options: [
          {
            name: 'Get Many',
            value: 'getAll',
            description: 'Retrieve daily listing metrics summarized data',
            action: 'Get listing metrics',
            routing: {
              request: { method: 'GET', url: '/rest/v1/listing_metrics' },
            },
          },
        ],
        default: 'getAll',
      },

      // LISTING ITEM METRICS
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['listingItemMetrics'] } },
        options: [
          {
            name: 'Get Many',
            value: 'getAll',
            description: 'Retrieve reviews metrics summarized data',
            action: 'Get listing item metrics',
            routing: {
              request: { method: 'GET', url: '/rest/v1/listing_item_metrics' },
            },
          },
        ],
        default: 'getAll',
      },

      // CONTENT PUBLISHING MEDIA
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['contentPublishingMedia'] } },
        options: [
          {
            name: 'Publish / Schedule',
            value: 'publish',
            description: 'Publish or schedule content publishing media posts',
            action: 'Publish or schedule a media post',
            routing: {
              request: {
                method: 'POST',
                url: '/rest/v1/content_publishing_media',
              },
            },
          },
        ],
        default: 'publish',
      },

      {
        displayName: 'Post Fields',
        name: 'postFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
          show: { resource: ['contentPublishingMedia'], operation: ['publish'] },
        },
        options: [
          {
            displayName: 'Media URL',
            name: 'media_url',
            type: 'string',
            default: '',
            description: 'Public URL of the media to publish',
            routing: { send: { type: 'body', property: 'media_url' } },
          },
          {
            displayName: 'Caption',
            name: 'caption',
            type: 'string',
            typeOptions: { rows: 3 },
            default: '',
            routing: { send: { type: 'body', property: 'caption' } },
          },
          {
            displayName: 'Scheduled At',
            name: 'scheduled_at',
            type: 'dateTime',
            default: '',
            description: 'Leave empty to publish immediately',
            routing: { send: { type: 'body', property: 'scheduled_at' } },
          },
          {
            displayName: 'Listing ID',
            name: 'listing_id',
            type: 'string',
            default: '',
            routing: { send: { type: 'body', property: 'listing_id' } },
          },
        ],
      },

      // COMMON FILTERS
      {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { operation: ['getAll'] } },
        options: [
          {
            displayName: 'Page',
            name: 'page',
            type: 'number',
            typeOptions: { minValue: 1 },
            default: 1,
            routing: { send: { type: 'query', property: 'page' } },
          },
          {
            displayName: 'Items Per Page',
            name: 'itemsPerPage',
            type: 'number',
            typeOptions: { minValue: 1, maxValue: 100 },
            default: 30,
            routing: { send: { type: 'query', property: 'itemsPerPage' } },
          },
        ],
      },
    ],
  };
}