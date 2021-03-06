import PropTypes from 'prop-types';
import componentTypes from './componentTypes';
import backgroundStyleOptions from './backgroundStyleOptions';
import headerStyleOptions from './headerStyleOptions';

export const componentShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(componentTypes)).isRequired,
  children: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.shape({
    // Dimensions
    width: PropTypes.number,
    height: PropTypes.number,

    // Header
    headerSize: PropTypes.oneOf(headerStyleOptions.map(opt => opt.value)),

    // Row
    background: PropTypes.oneOf(backgroundStyleOptions.map(opt => opt.value)),
  }),
});

export const chartPropShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  chartAlert: PropTypes.string,
  chartStatus: PropTypes.string,
  chartUpdateEndTime: PropTypes.number,
  chartUpdateStartTime: PropTypes.number,
  latestQueryFormData: PropTypes.object,
  queryRequest: PropTypes.object,
  queryResponse: PropTypes.object,
  triggerQuery: PropTypes.bool,
  lastRendered: PropTypes.number,
});

export const slicePropShape = PropTypes.shape({
  slice_id: PropTypes.number.isRequired,
  slice_url: PropTypes.string.isRequired,
  slice_name: PropTypes.string.isRequired,
  edit_url: PropTypes.string.isRequired,
  datasource: PropTypes.string,
  datasource_name: PropTypes.string,
  datasource_link: PropTypes.string,
  changed_on: PropTypes.number.isRequired,
  modified: PropTypes.string.isRequired,
  viz_type: PropTypes.string.isRequired,
  description: PropTypes.string,
  description_markeddown: PropTypes.string,
});

export const dashboardStatePropShape = PropTypes.shape({
  sliceIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  refresh: PropTypes.bool.isRequired,
  filters: PropTypes.object.isRequired,
  expandedSlices: PropTypes.object,
  editMode: PropTypes.bool,
  showBuilderPane: PropTypes.bool,
  hasUnsavedChanges: PropTypes.bool,
});

export const dashboardInfoPropShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  metadata: PropTypes.object,
  slug: PropTypes.string,
  dash_edit_perm: PropTypes.bool.isRequired,
  dash_save_perm: PropTypes.bool.isRequired,
  common: PropTypes.object,
  userId: PropTypes.string.isRequired,
});

export const loadStatsPropShape = PropTypes.objectOf(
  PropTypes.shape({
    didLoad: PropTypes.bool.isRequired,
    minQueryStartTime: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    parent_id: PropTypes.string,
    parent_type: PropTypes.string,
    index: PropTypes.number.isRequired,
    slice_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
);
