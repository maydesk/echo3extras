/**
 * Creates a new TabPane.
 * 
 * @constructor
 * @class TabPane component.
 * @base EchoApp.Component
 */
ExtrasApp.TabPane = function(renderId) {
    EchoApp.Component.call(this, "ExtrasApp.TabPane", renderId);
};

ExtrasApp.TabPane.prototype = new EchoApp.Component;

/**
 * Constant for the <code>borderType</code> property indicating that no 
 * border should be drawn around the content.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.BORDER_TYPE_NONE = 0;

/**
 * Constant for the <code>borderType</code> property indicating that a
 * border should be drawn immediately adjacent to the tabs only.
 * If the tabs are positioned at the top of the <code>TabPane</code> the
 * border will only be drawn directly beneath the tabs with this setting.  
 * If the tabs are positioned at the bottom of the <code>TabPane</code> the
 * border will only be drawn directly above the tabs with this setting.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.BORDER_TYPE_ADJACENT_TO_TABS = 1;

/**
 * Constant for the <code>borderType</code> property indicating that
 * borders should be drawn above and below the content, but not at its 
 * sides.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.BORDER_TYPE_PARALLEL_TO_TABS = 2;

/**
 * Constant for the <code>borderType</code> property indicating that
 * borders should be drawn on all sides of the content.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.BORDER_TYPE_SURROUND = 3;

/**
 * Constant for the <code>tabPosition</code> property indicating that
 * the tabs are positioned at the top of the <code>TabPane</code>.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.TAB_POSITION_TOP = 0;

/**
 * Constant for the <code>tabPosition</code> property indicating that
 * the tabs are positioned at the bottom of the <code>TabPane</code>.
 * 
 * @type {Number}
 */
ExtrasApp.TabPane.TAB_POSITION_BOTTOM = 1;

EchoApp.ComponentFactory.registerType("ExtrasApp.TabPane", ExtrasApp.TabPane);