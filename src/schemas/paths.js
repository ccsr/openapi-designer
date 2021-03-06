import {mimeTypeArray} from './mime';
import {schemes} from './schemes';
import {securityRequirements} from './security';
import {response} from './responses';
import {parameter} from './parameters';

const operationChildren = {
  'operationId': {
    'label': 'Operation ID',
    'type': 'text'
  },
  'summary': {
    'type': 'text'
  },
  'description': {
    'type': 'textarea',
    'hideValueIfEmpty': true
  },
  'deprecated': {
    'type': 'option',
    'format': 'checkbox',
    'hideValueIfEmpty': true
  },
  'overrides': {
    'type': 'object',
    'collapsed': 'true',
    'showValueInParent': false,
    'children': {
      'consumes': mimeTypeArray,
      'produces': mimeTypeArray,
      'security': securityRequirements,
      'schemes': schemes
    }
  },
  'consumes': {
    'type': 'link',
    'target': '../overrides/consumes',
    'hideValueIfEmpty': true
  },
  'produces': {
    'type': 'link',
    'target': '../overrides/produces',
    'hideValueIfEmpty': true
  },
  'schemes': {
    'type': 'link',
    'target': '../overrides/schemes',
    'hideValueIfEmpty': true
  },
  'security': {
    'type': 'link',
    'target': '../overrides/security',
    'hideValueIfEmpty': true
  },
  'tags': {
    'type': 'array',
    'item': {
      'type': 'option',
      'format': 'dropdown',
      'label': 'Tag',
      'hideIfNoChoices': false,
      'hideValueIfEmpty': true,
      'dataSources': [{
        'source': '/tags',
        'key': '${#/name}'
      }]
    }
  },
  'responses': {
    'type': 'array',
    'format': 'map',
    'collapseManagement': true,
    'addIndexToChildLabel': false,
    'hideValueIfEmpty': false,
    'newItemText': 'New Response',
    'keyField': 'status',
    'item': response
  },
  'parameters': {
    'type': 'array',
    'collapseManagement': true,
    'addIndexToChildLabel': false,
    'hideValueIfEmpty': true,
    'newItemText': 'New Parameter',
    'item': parameter
  }
};

export const paths = {
  'type': 'array',
  'format': 'map',
  'keyField': 'name',
  'addIndexToChildLabel': false,
  'collapseManagement': true,
  'isCollapsible': false,
  'item': {
    'type': 'selectable',
    'label': 'Path ${#:key}',
    'keyKey': 'name',
    'keyPlaceholder': 'Enter path...',
    'types': {
      'operation': {
        'type': 'object',
        'format': 'tabs',
        'label': '',
        'children': {
          'get': {
            'type': 'object',
            'label': 'GET',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'put': {
            'type': 'object',
            'label': 'PUT',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'post': {
            'type': 'object',
            'label': 'POST',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'delete': {
            'type': 'object',
            'label': 'DELETE',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'options': {
            'type': 'object',
            'label': 'OPTIONS',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'head': {
            'type': 'object',
            'label': 'HEAD',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'patch': {
            'type': 'object',
            'label': 'PATCH',
            'hideValueIfEmpty': true,
            'isCollapsible': false,
            'children': operationChildren
          },
          'parameters': {
            'type': 'array',
            'label': 'Params',
            'collapseManagement': true,
            'isCollapsible': false,
            'hideValueIfEmpty': true,
            'addIndexToChildLabel': false,
            'newItemText': 'New Parameter',
            'item': parameter
          }
        }
      },
      'reference': {
        'type': 'object',
        'label': '',
        'children': {
          '$ref': {
            'type': 'option',
            'format': 'dropdown',
            'label': 'Target',
            'hideIfNoChoices': false,
            'dataSources': [{
              'source': '/paths',
              'key': '#/paths/${#:key}',
              'label': 'Path ${#:key}'
            }]
          }
        }
      }
    }
  }
};
