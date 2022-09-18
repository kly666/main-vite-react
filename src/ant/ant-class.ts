export default `
/*
 * @desc: [link链接色]
 */
a {
  color: var(--link-color);
}
a:hover {
  color: var(--link-color-hover);
}
a:active {
  color: var(--link-color-active);
}

/*
 * desc[primary主题色]
 */
::-moz-selection {
  background: var(--primary-color);
}
::selection {
  background: var(--primary-color);
}
html {
  --antd-wave-shadow-color: var(--primary-color);
}
[ant-click-animating-without-extra-node='true']::after,
.ant-click-animating-node {
  -webkit-box-shadow: 0 0 0 0 var(--primary-color);
          box-shadow: 0 0 0 0 var(--primary-color);
  -webkit-box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
          box-shadow: 0 0 0 0 var(--antd-wave-shadow-color);
}
@-webkit-keyframes waveEffect {
  100% {
    -webkit-box-shadow: 0 0 0 var(--primary-color);
            box-shadow: 0 0 0 var(--primary-color);
    -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
            box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
  }
}
@keyframes waveEffect {
  100% {
    -webkit-box-shadow: 0 0 0 var(--primary-color);
            box-shadow: 0 0 0 var(--primary-color);
    -webkit-box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
            box-shadow: 0 0 0 6px var(--antd-wave-shadow-color);
  }
}
.ant-alert-info .ant-alert-icon {
  color: var(--primary-color);
}
.ant-anchor-ink-ball {
  border: 2px solid var(--primary-color);
}
.ant-anchor-link-active > .ant-anchor-link-title {
  color: var(--primary-color);
}
.ant-select-auto-complete.ant-select .ant-input:focus,
.ant-select-auto-complete.ant-select .ant-input:hover {
  border-color: var(--primary-color-hover);
}
.ant-select-selection:hover, .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
  border-color: var(--primary-color-hover);
}
.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active,
.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-select-open .ant-select-selection {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon {
  color: var(--primary-color);
}
.ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
  background-color: var(--primary-color-outline);
}
.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled),
.ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  background-color: var(--primary-color-outline);
}
.ant-input:hover {
  border-color: var(--primary-color-hover);
}
.ant-input:focus {
  border-color: var(--primary-color-hover);
}
.ant-input:focus, .ant-input-focused {
  box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-input-group-addon .ant-select-open .ant-select-selection,
.ant-input-group-addon .ant-select-focused .ant-select-selection {
  color: var(--primary-color);
}
.ant-input-affix-wrapper:hover, .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
  border-color: var(--primary-color-hover);
}
.ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
  border-color: var(--primary-color-hover);
}
.ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
  border-color: var(--primary-color-hover);
  box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-input-search .ant-input:hover, .ant-input-search .ant-input:focus {
  border-color: var(--primary-color-hover);
}
.ant-input-search .ant-input:hover + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary), .ant-input-search .ant-input:focus + .ant-input-group-addon .ant-input-search-button:not(.ant-btn-primary) {
  border-color: var(--primary-color-hover);
}
.ant-btn:hover,
.ant-btn:focus {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-btn:active,
.ant-btn.active {
  border-color: var(--primary-color-active);
}
.ant-btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-btn-primary:hover,
.ant-btn-primary:focus {
  color: #fff;
  background-color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-btn-primary:active,
.ant-btn-primary.active {
  background-color: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
.ant-btn-group .ant-btn-primary:not(:first-child):not(:last-child) {
  border-right-color: var(--primary-color-hover);
  border-left-color: var(--primary-color-hover);
}
.ant-btn-group .ant-btn-primary:first-child:not(:last-child) {
  border-right-color: var(--primary-color-hover);
}
.ant-btn-group .ant-btn-primary:last-child:not(:first-child),
.ant-btn-group .ant-btn-primary + .ant-btn-primary {
  border-left-color: var(--primary-color-hover);
}
.ant-btn-ghost:hover,
.ant-btn-ghost:focus {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-btn-ghost:active,
.ant-btn-ghost.active {
  color: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
.ant-btn-dashed:hover,
.ant-btn-dashed:focus {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-btn-dashed:active,
.ant-btn-dashed.active {
  color: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
.ant-btn-link {
  color: var(--primary-color);
}
.ant-btn-link:hover,
.ant-btn-link:focus {
  color: var(--primary-color-hover);
  border-color: transparent;
}
.ant-btn-link:active,
.ant-btn-link.active {
  color: var(--primary-color-active);
  border-color: transparent;
}
.ant-btn-background-ghost.ant-btn-primary {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-btn-background-ghost.ant-btn-primary:hover,
.ant-btn-background-ghost.ant-btn-primary:focus {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-btn-background-ghost.ant-btn-primary:active,
.ant-btn-background-ghost.ant-btn-primary.active {
  color: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
.ant-btn-background-ghost.ant-btn-link {
  color: var(--primary-color);
}
.ant-btn-background-ghost.ant-btn-link:hover,
.ant-btn-background-ghost.ant-btn-link:focus {
  color: var(--primary-color-hover);
}
.ant-btn-background-ghost.ant-btn-link:active,
.ant-btn-background-ghost.ant-btn-link.active {
  color: var(--primary-color-active);
}
.ant-badge-status-processing {
  background-color: var(--primary-color);
}
.ant-badge-status-processing::after {
  border: 1px solid var(--primary-color);
}
.ant-badge-status-blue {
  background: var(--primary-color);
}
.ant-breadcrumb a:hover {
  color: var(--primary-color-hover);
}
.ant-menu-item > a:hover {
  color: var(--primary-color);
}
.ant-menu-item:hover,
.ant-menu-item-active,
.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
.ant-menu-submenu-active,
.ant-menu-submenu-title:hover {
  color: var(--primary-color);
}
.ant-menu-item-selected {
  color: var(--primary-color);
}
.ant-menu-item-selected > a,
.ant-menu-item-selected > a:hover {
  color: var(--primary-color);
}
.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: var(--primary-color-outline);
}
.ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after,
.ant-menu-submenu-vertical > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-left > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-vertical-right > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before,
.ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before {
  background: -webkit-gradient(linear, left top, right top, from(var(--primary-color)), to(var(--primary-color)));
  background: -webkit-linear-gradient(left, var(--primary-color), var(--primary-color));
  background: linear-gradient(to right, var(--primary-color), var(--primary-color));
}
.ant-menu-vertical .ant-menu-submenu-selected,
.ant-menu-vertical-left .ant-menu-submenu-selected,
.ant-menu-vertical-right .ant-menu-submenu-selected {
  color: var(--primary-color);
}
.ant-menu-vertical .ant-menu-submenu-selected > a,
.ant-menu-vertical-left .ant-menu-submenu-selected > a,
.ant-menu-vertical-right .ant-menu-submenu-selected > a {
  color: var(--primary-color);
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item-active,
.ant-menu-horizontal > .ant-menu-submenu-active,
.ant-menu-horizontal > .ant-menu-item-open,
.ant-menu-horizontal > .ant-menu-submenu-open,
.ant-menu-horizontal > .ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu-selected {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}
.ant-menu-horizontal > .ant-menu-item > a:hover {
  color: var(--primary-color);
}
.ant-menu-horizontal > .ant-menu-item-selected > a {
  color: var(--primary-color);
}
.ant-menu-vertical .ant-menu-item::after,
.ant-menu-vertical-left .ant-menu-item::after,
.ant-menu-vertical-right .ant-menu-item::after,
.ant-menu-inline .ant-menu-item::after {
  border-right: 3px solid var(--primary-color);
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: var(--primary-color);
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: var(--primary-color);
}
/* antd v4.0 */
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item:hover {
  color: #fff;
  background-color: var(--primary-color);
}
.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-active, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-open, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item-selected, .ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected {
  color: var(--primary-color);
  border-bottom: 2px solid var(--primary-color);
}
.ant-menu-submenu-selected {
  color: var(--primary-color);
}
.ant-menu-item a:hover {
  color: var(--primary-color);
}
.ant-menu-submenu:hover>.ant-menu-submenu-title>.ant-menu-submenu-arrow,.ant-menu-submenu:hover>.ant-menu-submenu-title>.ant-menu-submenu-expand-icon {
  color: var(--primary-color);
}
/*
Dropdown组件*/
.ant-dropdown-menu-item-selected,
.ant-dropdown-menu-submenu-title-selected,
.ant-dropdown-menu-item-selected > a,
.ant-dropdown-menu-submenu-title-selected > a {
  color: var(--primary-color);
  background-color: var(--primary-color-outline);
}
.ant-dropdown-menu-item:hover,
.ant-dropdown-menu-submenu-title:hover {
  background-color: var(--primary-color-outline);
}
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,
.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {
  background: var(--primary-color);
}
.ant-fullcalendar-value:hover {
  background: var(--primary-color-outline);
}
.ant-fullcalendar-value:active {
  background: var(--primary-color);
}
.ant-fullcalendar-today .ant-fullcalendar-value,
.ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
  -webkit-box-shadow: 0 0 0 1px var(--primary-color) inset;
          box-shadow: 0 0 0 1px var(--primary-color) inset;
}
.ant-fullcalendar-fullscreen .ant-fullcalendar-month:hover,
.ant-fullcalendar-fullscreen .ant-fullcalendar-date:hover {
  background: var(--primary-color-outline);
}
.ant-fullcalendar-fullscreen .ant-fullcalendar-month:active,
.ant-fullcalendar-fullscreen .ant-fullcalendar-date:active {
  background: var(--primary-color-outline);
}
.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-month,
.ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-date {
  border-top-color: var(--primary-color);
}
.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value,
.ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-value {
  color: var(--primary-color);
}
.ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-month,
.ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-date {
  background: var(--primary-color-outline);
}
.ant-radio-wrapper:hover .ant-radio,
.ant-radio:hover .ant-radio-inner,
.ant-radio-input:focus + .ant-radio-inner {
  border-color: var(--primary-color);
}
.ant-radio-checked::after {
  border: 1px solid var(--primary-color);
}
.ant-radio-inner::after {
  background-color: var(--primary-color);
}
.ant-radio-checked .ant-radio-inner {
  border-color: var(--primary-color);
}
.ant-radio-button-wrapper:hover {
  color: var(--primary-color);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
.ant-radio-button-wrapper-checked {
  color: var(--primary-color);
  border-color: var(--primary-color);
  -webkit-box-shadow: -1px 0 0 0 var(--primary-color);
          box-shadow: -1px 0 0 0 var(--primary-color);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: -1px 0 0 0 var(--primary-color-hover);
          box-shadow: -1px 0 0 0 var(--primary-color-hover);
}
.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child {
  border-color: var(--primary-color);
}
.ant-radio-button-wrapper-checked::before {
  background-color: var(--primary-color) !important;
  opacity: 0.1;
}
.ant-radio-button-wrapper-checked:first-child {
  border-color: var(--primary-color);
  -webkit-box-shadow: none !important;
          box-shadow: none !important;
}
.ant-radio-button-wrapper-checked:hover {
  color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: -1px 0 0 0 var(--primary-color-hover);
          box-shadow: -1px 0 0 0 var(--primary-color-hover);
}
.ant-radio-button-wrapper-checked:active {
  color: var(--primary-color-active);
  border-color: var(--primary-color-active);
  -webkit-box-shadow: -1px 0 0 0 var(--primary-color-active);
          box-shadow: -1px 0 0 0 var(--primary-color-active);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: #fff;
  background: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
  color: #fff;
  background: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
  color: #fff;
  background: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
/* ant v4.0之后 */
.ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
  border-right-color: var(--primary-color);
}

/*
AntCard相关*/
.ant-card-actions > li > span:hover {
  color: var(--primary-color);
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
}
.ant-card-actions > li > span a:hover {
  color: var(--primary-color);
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  color: var(--primary-color);
}
.ant-tabs-extra-content .ant-tabs-new-tab:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-tabs .ant-tabs-card-bar.ant-tabs-bottom-bar .ant-tabs-tab-active {
  color: var(--primary-color);
}
.ant-tabs-ink-bar {
  background-color: var(--primary-color);
}
.ant-tabs-nav .ant-tabs-tab:hover {
  color: var(--primary-color-hover);
}
.ant-tabs-nav .ant-tabs-tab:active {
  color: var(--primary-color-active);
}
.ant-tabs-nav .ant-tabs-tab-active {
  color: var(--primary-color);
}
/* antd v4.6 */
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--primary-color);
}

/*
cascader 相关*/
.ant-cascader-picker:focus .ant-cascader-input {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-cascader-picker-label:hover + .ant-cascader-input {
  border-color: var(--primary-color-hover);
}
.ant-cascader-menu-item:hover {
  background: var(--primary-color-outline);
}
.ant-checkbox-wrapper:hover .ant-checkbox-inner,
.ant-checkbox:hover .ant-checkbox-inner,
.ant-checkbox-input:focus + .ant-checkbox-inner {
  border-color: var(--primary-color);
}
.ant-checkbox-checked::after {
  border: 1px solid var(--primary-color);
}
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-checkbox-indeterminate .ant-checkbox-inner::after {
  background-color: var(--primary-color);
}
.ant-calendar-selected-day .ant-calendar-date {
  background: var(--primary-color-outline);
}
.ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled) {
  border-color: var(--primary-color);
}
.ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled) {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-calendar-header a:hover {
  color: var(--primary-color-hover);
}
.ant-calendar-date:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-date:active {
  background: var(--primary-color-hover);
}
.ant-calendar-today .ant-calendar-date {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date,
.ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date {
  background: var(--primary-color);
}
.ant-calendar-range .ant-calendar-selected-start-date .ant-calendar-date:hover,
.ant-calendar-range .ant-calendar-selected-end-date .ant-calendar-date:hover {
  background: var(--primary-color-hover);
}
.ant-calendar-selected-date .ant-calendar-date,
.ant-calendar-selected-start-date .ant-calendar-date,
.ant-calendar-selected-end-date .ant-calendar-date {
  color: #fff;
  background: var(--primary-color);
}
.ant-calendar-selected-date .ant-calendar-date:hover,
.ant-calendar-selected-start-date .ant-calendar-date:hover,
.ant-calendar-selected-end-date .ant-calendar-date:hover {
  color: #fff;
  background: var(--primary-color);
}
.ant-calendar .ant-calendar-ok-btn {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-calendar .ant-calendar-ok-btn:hover,
.ant-calendar .ant-calendar-ok-btn:focus {
  background-color: var(--primary-color-hover);
  border-color: var(--primary-color-hover);
}
.ant-calendar .ant-calendar-ok-btn:active,
.ant-calendar .ant-calendar-ok-btn.active {
  background-color: var(--primary-color-active);
  border-color: var(--primary-color-active);
}
.ant-calendar-range .ant-calendar-input:hover,
.ant-calendar-range .ant-calendar-time-picker-input:hover {
  border-color: var(--primary-color-hover);
}
.ant-calendar-range .ant-calendar-input:focus,
.ant-calendar-range .ant-calendar-time-picker-input:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-calendar-month-panel-header a:hover {
  color: var(--primary-color-hover);
}
.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
  background: var(--primary-color);
}
.ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover {
  background: var(--primary-color);
}
.ant-calendar-year-panel-header a:hover {
  color: var(--primary-color-hover);
}
.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
  background: var(--primary-color);
}
.ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {
  background: var(--primary-color);
}
.ant-calendar-decade-panel-header a:hover {
  color: var(--primary-color-hover);
}
.ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {
  background: var(--primary-color);
}
.ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade:hover {
  background: var(--primary-color);
}
.ant-calendar-range .ant-calendar-in-range-cell::before {
  background: var(--primary-color-outline);
}
.ant-calendar-time-picker-select li:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-month-panel-month:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-year-panel-year:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-decade-panel-decade:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-week-number .ant-calendar-body tr:hover {
  background: var(--primary-color-outline);
}
.ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {
  background: var(--primary-color-outline);
}
.ant-time-picker-input:hover {
  border-color: var(--primary-color-hover);
}
.ant-time-picker-input:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-time-picker-panel-select li:hover {
  background: var(--primary-color-outline);
}

/* Picker V4.8 新增 */
.ant-picker-focused, .ant-picker:hover  {
  border-color: var(--primary-color);
}
.ant-picker-focused {
  box-shadow: var(--primary-color-outline) 0px 0px 0px 2px;;
}
.ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
  border-color: var(--primary-color)
}
.ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
  background: var(--primary-color);
}

.ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before, .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before, .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
    background: var(--primary-color-outline);
}

.ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after {
    border-top: 1px dashed var(--primary-color);
    border-bottom: 1px dashed var(--primary-color);
}

tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child::after, tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after, .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after {
    border-left: 1px dashed var(--primary-color);
}

.ant-picker-year-panel .ant-picker-cell-range-hover-end::after, .ant-picker-quarter-panel .ant-picker-cell-range-hover-end::after, .ant-picker-month-panel .ant-picker-cell-range-hover-end::after,
tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child::after, tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after, .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after, .ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after {
    border-right: 1px dashed var(--primary-color);
}

.ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before, .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before, .ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before, .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before, .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end::before, .ant-picker-panel > :not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before, .ant-picker-panel > :not(.ant-picker-date-panel) .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
    background: var(--primary-color-outline);
}

.ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected .ant-picker-time-panel-cell-inner {
  background: var(--primary-color-outline);
}
.ant-picker-range .ant-picker-active-bar {
  background: var(--primary-color);
}

/*
Tag 标签*/
.ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
  color: var(--primary-color);
}
.ant-tag-checkable-checked {
  background-color: var(--primary-color);
}
.ant-tag-checkable:active {
  background-color: var(--primary-color-active);
}
.ant-transfer-list-content-item:not(.ant-transfer-list-content-item-disabled):hover {
  background-color: var(--primary-color-outline);
}
.has-error .ant-transfer-list-search:not([disabled]):hover {
  border-color: var(--primary-color-hover);
  border-right-width: 1px !important;
}
.has-error .ant-transfer-list-search:not([disabled]):focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.is-validating.has-feedback .ant-form-item-children-icon {
  color: var(--primary-color);
}
.ant-input-number:hover {
  border-color: var(--primary-color-hover);
}
.ant-input-number:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-input-number-handler:hover .ant-input-number-handler-up-inner,
.ant-input-number-handler:hover .ant-input-number-handler-down-inner {
  color: var(--primary-color-hover);
}
.ant-input-number:hover {
  border-color: var(--primary-color-hover);
  border-right-width: 1px !important;
}
.ant-input-number-focused {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-list-item-meta-title > a:hover {
  color: var(--primary-color);
}
.ant-spin {
  color: var(--primary-color);
}
.ant-spin-dot-item {
  background-color: var(--primary-color);
}
.ant-pagination-item:focus,
.ant-pagination-item:hover {
  border-color: var(--primary-color);
}
.ant-pagination-item:focus a,
.ant-pagination-item:hover a {
  color: var(--primary-color);
}
.ant-pagination-item-active {
  border-color: var(--primary-color);
}
.ant-pagination-item-active a {
  color: var(--primary-color);
}
.ant-pagination-item-active:focus,
.ant-pagination-item-active:hover {
  border-color: var(--primary-color-hover);
}
.ant-pagination-item-active:focus a,
.ant-pagination-item-active:hover a {
  color: var(--primary-color-hover);
}
.ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon,
.ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon {
  color: var(--primary-color);
}
.ant-pagination-prev:hover a,
.ant-pagination-next:hover a {
  border-color: var(--primary-color-hover);
}
.ant-pagination-prev:focus .ant-pagination-item-link,
.ant-pagination-next:focus .ant-pagination-item-link,
.ant-pagination-prev:hover .ant-pagination-item-link,
.ant-pagination-next:hover .ant-pagination-item-link {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-pagination-options-quick-jumper input:hover {
  border-color: var(--primary-color-hover);
}
.ant-pagination-options-quick-jumper input:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-pagination-simple .ant-pagination-simple-pager input:hover {
  border-color: var(--primary-color);
}
.ant-mention-wrapper .ant-mention-editor:hover {
  border-color: var(--primary-color-hover);
}
.ant-mention-wrapper .ant-mention-editor:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-mention-wrapper.ant-mention-active:not(.disabled) .ant-mention-editor {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-mention-dropdown-notfound.ant-mention-dropdown-item .anticon-loading {
  color: var(--primary-color);
}
.ant-mentions:hover {
  border-color: var(--primary-color-hover);
}
.ant-mentions:focus {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-mentions-focused {
  border-color: var(--primary-color-hover);
  -webkit-box-shadow: 0 0 0 2px var(--primary-color-outline);
          box-shadow: 0 0 0 2px var(--primary-color-outline);
}
.ant-mention-dropdown-item:hover {
  background-color: var(--primary-color-outline);
}
.ant-mention-dropdown-item.focus,
.ant-mention-dropdown-item-active {
  background-color: var(--primary-color-outline);
}
.ant-mentions-dropdown-menu-item:hover {
  background-color: var(--primary-color-outline);
}
.ant-mentions-dropdown-menu-item-active {
  background-color: var(--primary-color-outline);
}
.ant-message-info .anticon,
.ant-message-loading .anticon {
  color: var(--primary-color);
}
.ant-modal-confirm-info .ant-modal-confirm-body > .anticon {
  color: var(--primary-color);
}
.anticon.ant-notification-notice-icon-info {
  color: var(--primary-color);
}
.ant-page-header-back-button {
  color: var(--primary-color);
}
.ant-page-header-back-button:focus,
.ant-page-header-back-button:hover {
  color: var(--primary-color-hover);
}
.ant-page-header-back-button:active {
  color: var(--primary-color-active);
}
.ant-progress-circle-path {
  stroke: var(--primary-color);
}
.ant-progress-success-bg,
.ant-progress-bg {
  background-color: var(--primary-color);
}
.ant-slider {
  width: 100%;
}
.ant-slider-track {
  background-color: var(--primary-color-hover);
}
.ant-slider-handle {
  border: solid 2px var(--primary-color-hover);
}
.ant-slider-handle:focus {
  border-color: var(--primary-color-hover);
  box-shadow: 0 0 0 5px var(--primary-color-outline);
  outline: none;
}
.ant-slider-handle.ant-tooltip-open {
  border-color: var(--primary-color);
}
.ant-slider:hover .ant-slider-track {
  background-color: var(--primary-color-hover);
}
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
  border-color: var(--primary-color-hover);
}
.ant-slider-dot-active {
  border-color: var(--primary-color-active);
}
/*
Steps 相关*/
.ant-steps-item-icon > .ant-steps-icon {
  color: var(--primary-color);
}
.ant-steps-item-process .ant-steps-item-icon {
  color: #fff;
  border-color: var(--primary-color);
}
.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--primary-color);
}
.ant-steps-item-process .ant-steps-item-icon {
  background: var(--primary-color);
}
.ant-steps-item-finish .ant-steps-item-icon {
  border-color: var(--primary-color);
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: var(--primary-color);
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--primary-color);
}
.ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: var(--primary-color);
}
.ant-steps-item-finish > .ant-steps-item-tail::after {
  background-color: var(--primary-color);
}
.ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-title,
.ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-description {
  color: var(--primary-color);
}
.ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-icon {
  border-color: var(--primary-color);
}
.ant-steps-item[role='button']:not(.ant-steps-item-process):hover .ant-steps-item-icon .ant-steps-icon {
  color: var(--primary-color);
}
.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {
  color: var(--primary-color);
}
.ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
  background: var(--primary-color);
}
.ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
  background-color: var(--primary-color);
}
/*
Switch 相关*/
.ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
  color: var(--primary-color);
}
.ant-switch-checked {
  background-color: var(--primary-color);
}
.ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
  color: var(--primary-color);
}
.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-up.on,
.ant-table-thead > tr > th .ant-table-column-sorter .ant-table-column-sorter-inner .ant-table-column-sorter-down.on {
  color: var(--primary-color);
}
.ant-table-filter-dropdown .ant-dropdown-menu .ant-dropdown-submenu-contain-selected .ant-dropdown-menu-submenu-title::after {
  color: var(--primary-color);
}
.ant-table-filter-dropdown-link {
  color: var(--primary-color);
}
.ant-table-filter-dropdown-link:hover {
  color: var(--primary-color-hover);
}
.ant-table-filter-dropdown-link:active {
  color: var(--primary-color-active);
}
.ant-table-row-expand-icon:focus, .ant-table-row-expand-icon:hover {
  color: var(--primary-color-hover);
}
/* Table 4.8 */
.ant-table-tbody>tr.ant-table-row-selected>td {
  background: var(--primary-color-outline);
}

.ant-table-tbody>tr.ant-table-row-selected:hover>td {
  background: var(--primary-color-outline);
}
/*
Select组件*/
.ant-timeline-item-head-blue {
  color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,
.ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner,
.ant-select-tree-checkbox-input:focus + .ant-select-tree-checkbox-inner {
  border-color: var(--primary-color);
}
.ant-select-tree-checkbox-checked::after {
  border: 1px solid var(--primary-color);
}
.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner::after {
  background-color: var(--primary-color);
}
.ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon {
  color: var(--primary-color);
}
.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon,
.ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon {
  color: var(--primary-color);
}
.ant-select-tree li .ant-select-tree-node-content-wrapper:hover {
  background-color: var(--primary-color-outline);
}
.ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
  background-color: var(--primary-color-outline);
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner {
  border-color: var(--primary-color);
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner::after {
  border-color: var(--primary-color);
}
.ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper::before {
  background: var(--primary-color);
}
.ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
.ant-tree-checkbox:hover .ant-tree-checkbox-inner,
.ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
  border-color: var(--primary-color);
}
.ant-tree-checkbox-checked::after {
  border: 1px solid var(--primary-color);
}
.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
.ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner::after {
  background-color: var(--primary-color);
}
.ant-tree li.drag-over > span[draggable] {
  background-color: var(--primary-color);
}
.ant-tree li.drag-over-gap-top > span[draggable] {
  border-top-color: var(--primary-color);
}
.ant-tree li.drag-over-gap-bottom > span[draggable] {
  border-bottom-color: var(--primary-color);
}
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,
.ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {
  color: var(--primary-color);
}
.ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover::before,
.ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover::before {
  background: var(--primary-color-outline);
}
.ant-tree li .ant-tree-node-content-wrapper:hover {
  background-color: var(--primary-color-outline);
}
.ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: var(--primary-color-outline);
}
.ant-select-tree .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
  background-color: var(--primary-color-outline);
}
.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected {
  background-color: var(--primary-color-outline);
}
.ant-tree.ant-tree-directory .ant-tree-treenode-selected:hover::before, .ant-tree.ant-tree-directory .ant-tree-treenode-selected::before {
  background: var(--primary-color);
}
/*
Typography*/
.ant-typography a {
  color: var(--primary-color);
}
.ant-typography a:focus,
.ant-typography a:hover {
  color: var(--primary-color-hover);
}
.ant-typography a:active {
  color: var(--primary-color-active);
}
.ant-typography-expand,
.ant-typography-edit,
.ant-typography-copy {
  color: var(--primary-color);
}
.ant-typography-expand:focus,
.ant-typography-edit:focus,
.ant-typography-copy:focus,
.ant-typography-expand:hover,
.ant-typography-edit:hover,
.ant-typography-copy:hover {
  color: var(--primary-color-hover);
}
.ant-typography-expand:active,
.ant-typography-edit:active,
.ant-typography-copy:active {
  color: var(--primary-color-active);
}
.ant-upload.ant-upload-select-picture-card:hover {
  border-color: var(--primary-color);
}
.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {
  border-color: var(--primary-color-active);
}
.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {
  border-color: var(--primary-color-hover);
}
.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {
  color: var(--primary-color-hover);
}

/**
 * @desc: [error错误色]
 */
.ant-btn-danger {
  border-color: var(--error-color);
  background: var(--error-color);
}
.ant-btn-dangerous {
  color: var(--error-color);
  border-color: var(--error-color);
}
.ant-btn-dangerous.ant-btn-primary {
  border-color: var(--error-color);
  background: var(--error-color);
}
.ant-btn-dangerous.ant-btn-link {
  color: var(--error-color);
}
.ant-btn-dangerous.ant-btn-text {
  color: var(--error-color);
}
.ant-btn-background-ghost.ant-btn-danger {
  color: var(--error-color);
  border-color: var(--error-color);
}
.ant-badge-status-error {
  background-color: var(--error-color);
}
.ant-menu-item-danger.ant-menu-item {
  color: var(--error-color);
}
.ant-menu-item-danger.ant-menu-item:hover,
.ant-menu-item-danger.ant-menu-item-active {
  color: var(--error-color);
}
.ant-menu-item-danger.ant-menu-item-selected {
  color: var(--error-color);
}
.ant-menu-item-danger.ant-menu-item-selected > a,
.ant-menu-item-danger.ant-menu-item-selected > a:hover {
  color: var(--error-color);
}
.ant-menu-inline .ant-menu-item-danger.ant-menu-item::after {
  border-right-color: var(--error-color);
}
.ant-menu-dark .ant-menu-item-danger.ant-menu-item,
.ant-menu-dark .ant-menu-item-danger.ant-menu-item:hover,
.ant-menu-dark .ant-menu-item-danger.ant-menu-item > a {
  color: var(--error-color);
}
.ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-danger.ant-menu-item-selected {
  background-color: var(--error-color);
}
.ant-dropdown-menu-item.ant-dropdown-menu-item-danger {
  color: var(--error-color);
}
.ant-dropdown-menu-item.ant-dropdown-menu-item-danger:hover {
  background-color: var(--error-color);
}
.ant-btn-background-ghost.ant-btn-dangerous {
  color: var(--error-color);
  border-color: var(--error-color);
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link {
  color: var(--error-color);
}
.ant-tag-error {
  color: var(--error-color);
  background: var(--error-color-deprecated-bg);
  border-color: var(--error-color-deprecated-border);
}
.ant-form-item-explain-error {
  color: var(--error-color);
}
.ant-form-item-has-error .ant-form-item-split {
  color: var(--error-color);
}
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-input-prefix,
.ant-form-item-has-error .ant-input-number-prefix {
  color: var(--error-color);
}
.ant-form-item-has-error .ant-input-group-addon,
.ant-form-item-has-error .ant-input-number-group-addon {
  color: var(--error-color);
  border-color: var(--error-color);
}
.ant-form-item-has-error .has-feedback {
  color: var(--error-color);
}
.ant-form-item-has-error.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: var(--error-color);
}
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  border-color: var(--error-color) !important;
}
.ant-form-item-has-error .ant-select.ant-select-auto-complete .ant-input:focus {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-input-number,
.ant-form-item-has-error .ant-picker {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-input-number:not([disabled]):hover,
.ant-form-item-has-error .ant-picker:not([disabled]):hover {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor,
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):hover {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-cascader-picker:hover .ant-cascader-picker-label:hover + .ant-cascader-input.ant-input {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-transfer-list {
  border-color: var(--error-color);
}
.ant-form-item-has-error .ant-radio-button-wrapper {
  border-color: var(--error-color) !important;
}
.ant-form-item-has-error .ant-radio-button-wrapper:not(:first-child)::before {
  background-color: var(--error-color);
}
.ant-form-item-has-error .ant-mentions {
  border-color: var(--error-color) !important;
}
.ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
  color: var(--error-color);
}
.ant-input-number-out-of-range input {
  color: var(--error-color);
}
.ant-message-error .anticon {
  color: var(--error-color);
}
.ant-modal-confirm-error .ant-modal-confirm-body > .anticon {
  color: var(--error-color);
}
.anticon.ant-notification-notice-icon-error {
  color: var(--error-color);
}
.ant-result-error .ant-result-icon > .anticon {
  color: var(--error-color);
}
.ant-steps-item-error .ant-steps-item-icon {
  border-color: var(--error-color);
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {
  color: var(--error-color);
}
.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
  background: var(--error-color);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
  color: var(--error-color);
}
.ant-steps-item-error > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
  color: var(--error-color);
}
.ant-steps-item.ant-steps-next-error .ant-steps-item-title::after {
  background: var(--error-color);
}
.ant-typography.ant-typography-danger {
  color: var(--error-color);
}
.ant-upload-list-item-error,
.ant-upload-list-item-error .ant-upload-text-icon > .anticon,
.ant-upload-list-item-error .ant-upload-list-item-name {
  color: var(--error-color);
}
.ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
  color: var(--error-color);
}
.ant-upload-list-picture .ant-upload-list-item-error,
.ant-upload-list-picture-card .ant-upload-list-item-error {
  border-color: var(--error-color);
}
.ant-btn-danger:hover, .ant-btn-danger:focus {
  color: #fff;
  background-color: var(--error-color-hover);
  border-color: var(--error-color-hover);
}
.ant-btn-dangerous:hover, .ant-btn-dangerous:focus {
  color: var(--error-color-hover);
  border-color: var(--error-color-hover);
}
.ant-btn-dangerous.ant-btn-primary:hover,
.ant-btn-dangerous.ant-btn-primary:focus {
  color: #fff;
  border-color: var(--error-color-hover);
  background: var(--error-color-hover);
}
.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--error-color-hover);
}
.ant-btn-dangerous.ant-btn-text:hover,
.ant-btn-dangerous.ant-btn-text:focus {
  color: var(--error-color-hover);
}
.ant-btn-background-ghost.ant-btn-danger:hover,
.ant-btn-background-ghost.ant-btn-danger:focus {
  color: var(--error-color-hover);
  border-color: var(--error-color-hover);
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:hover,
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:focus {
  color: var(--error-color-hover);
}
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-form-item-has-error :not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,
.ant-form-item-has-error :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,
.ant-form-item-has-error :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-calendar-picker-open .ant-calendar-picker-input {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-form-item-has-error .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-input-number-focused,
.ant-form-item-has-error .ant-picker-focused,
.ant-form-item-has-error .ant-input-number:focus,
.ant-form-item-has-error .ant-picker:focus {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-mention-wrapper.ant-mention-active:not([disabled]) .ant-mention-editor,
.ant-form-item-has-error .ant-mention-wrapper .ant-mention-editor:not([disabled]):focus {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-cascader-picker:focus .ant-cascader-input {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
.ant-form-item-has-error .ant-mentions-focused,
.ant-form-item-has-error .ant-mentions:focus {
  border-color: var(--error-color-hover);
  box-shadow: 0 0 0 2px var(--error-color-outline);
}
a.ant-typography.ant-typography-danger:active,
a.ant-typography.ant-typography-danger:focus,
a.ant-typography.ant-typography-danger:hover {
  color: var(--error-color-hover);
}

.ant-btn-danger:active {
  border-color: var(--error-color-active);
  background: var(--error-color-active);
}
.ant-btn-dangerous:active {
  color: var(--error-color-active);
  border-color: var(--error-color-active);
}
.ant-btn-dangerous.ant-btn-primary:active {
  border-color: var(--error-color-active);
  background: var(--error-color-active);
}
.ant-btn-dangerous.ant-btn-link:active {
  color: var(--error-color-active);
}
.ant-btn-dangerous.ant-btn-text:active {
  color: var(--error-color-active);
}
.ant-btn-background-ghost.ant-btn-danger:active {
  color: var(--error-color-active);
  border-color: var(--error-color-active);
}
.ant-btn-background-ghost.ant-btn-dangerous:active {
  color: var(--error-color-active);
  border-color: var(--error-color-active);
}
.ant-btn-background-ghost.ant-btn-dangerous.ant-btn-link:active {
  color: var(--error-color-active);
}

.ant-alert-error {
  background-color: var(--error-color-deprecated-bg);
  border: 1px solid var(--error-color-deprecated-border);
}

/*
 * @desc: [waring警告色]
 */
.ant-alert-warning .ant-alert-icon {
  color: var(--warning-color);
}
.ant-badge-status-warning {
  background-color: var(--warning-color);
}
.ant-tag-warning {
  color: var(--warning-color);
  background: var(--warning-color-deprecated-bg);
  border-color: var(--warning-color-deprecated-border);
}
.ant-form-item-explain-warning {
  color: var(--warning-color);
}
.ant-form-item-has-warning .ant-form-item-split {
  color: var(--warning-color);
}
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper,
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:hover {
  border-color: var(--warning-color);
}
.ant-form-item-has-warning .ant-input-prefix,
.ant-form-item-has-warning .ant-input-number-prefix {
  color: var(--warning-color);
}
.ant-form-item-has-warning .ant-input-group-addon,
.ant-form-item-has-warning .ant-input-number-group-addon {
  color: var(--warning-color);
  border-color: var(--warning-color);
}
.ant-form-item-has-warning .has-feedback {
  color: var(--warning-color);
}
.ant-form-item-has-warning.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: var(--warning-color);
  -webkit-animation-name: diffZoomIn3 !important;
          animation-name: diffZoomIn3 !important;
}
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input) .ant-select-selector {
  border-color: var(--warning-color) !important;
}
.ant-form-item-has-warning .ant-input-number,
.ant-form-item-has-warning .ant-picker {
  border-color: var(--warning-color);
}
.ant-form-item-has-warning .ant-input-number:not([disabled]):hover,
.ant-form-item-has-warning .ant-picker:not([disabled]):hover {
  border-color: var(--warning-color);
}
.ant-message-warning .anticon {
  color: var(--warning-color);
}
.ant-modal-confirm-warning .ant-modal-confirm-body > .anticon,
.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {
  color: var(--warning-color);
}
.anticon.ant-notification-notice-icon-warning {
  color: var(--warning-color);
}
.ant-result-warning .ant-result-icon > .anticon {
  color: var(--warning-color);
}
.ant-typography.ant-typography-warning {
  color: var(--warning-color);
}
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:focus,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:focus,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper:focus,
.ant-form-item-has-warning :not(.ant-input-disabled):not(.ant-input-borderless).ant-input-focused,
.ant-form-item-has-warning :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper-focused,
.ant-form-item-has-warning :not(.ant-input-number-affix-wrapper-disabled):not(.ant-input-number-affix-wrapper-borderless).ant-input-number-affix-wrapper-focused {
  border-color: var(--warning-color-hover);
  box-shadow: 0 0 0 2px var(--warning-color-outline);
}
.ant-form-item-has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
  border-color: var(--warning-color-hover);
  box-shadow: 0 0 0 2px var(--warning-color-outline);
}
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-open .ant-select-selector,
.ant-form-item-has-warning .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input).ant-select-focused .ant-select-selector {
  border-color: var(--warning-color-hover);
  box-shadow: 0 0 0 2px var(--warning-color-outline);
}
.ant-form-item-has-warning .ant-input-number-focused,
.ant-form-item-has-warning .ant-picker-focused,
.ant-form-item-has-warning .ant-input-number:focus,
.ant-form-item-has-warning .ant-picker:focus {
  border-color: var(--warning-color-hover);
  box-shadow: 0 0 0 2px var(--warning-color-outline);
}
.ant-form-item-has-warning .ant-cascader-picker:focus .ant-cascader-input {
  border-color: var(--warning-color-hover);
  box-shadow: 0 0 0 2px var(--warning-color-outline);
}

/*
 * @desc: [success成功色]
 */
.ant-alert-success .ant-alert-icon {
  color: var(--success-color);
}
.ant-badge-status-success {
  background-color: var(--success-color);
}
.ant-badge-status-green {
  background: var(--success-color);
}
.ant-tag-success {
  color: var(--success-color);
  background: var(--success-color-deprecated-bg);
  border-color: var(--success-color-deprecated-border);
}
.ant-form-item-has-success.ant-form-item-has-feedback .ant-form-item-children-icon {
  color: var(--success-color);
}
.ant-message-success .anticon {
  color: var(--success-color);
}
.ant-modal-confirm-success .ant-modal-confirm-body > .anticon {
  color: var(--success-color);
}
.anticon.ant-notification-notice-icon-success {
  color: var(--success-color);
}
.ant-progress-success-bg {
  background-color: var(--success-color);
}
.ant-progress-status-success .ant-progress-bg {
  background-color: var(--success-color);
}
.ant-progress-status-success .ant-progress-text {
  color: var(--success-color);
}
.ant-progress-status-success .ant-progress-inner:not(.ant-progress-circle-gradient) .ant-progress-circle-path {
  stroke: var(--success-color);
}
.ant-progress-circle.ant-progress-status-success .ant-progress-text {
  color: var(--success-color);
}
.ant-result-success .ant-result-icon > .anticon {
  color: var(--success-color);
}
.ant-typography.ant-typography-success {
  color: var(--success-color);
}
.ant-typography-copy-success,
.ant-typography-copy-success:hover,
.ant-typography-copy-success:focus {
  color: var(--success-color);
}

.ant-alert-success {
  background-color: var(--success-color-deprecated-bg);
  border: 1px solid var(--success-color-deprecated-border);
}
`
