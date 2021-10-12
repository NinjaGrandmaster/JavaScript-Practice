"use strict"

// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

// inside if result is true, alert will be executed
if (-1 || 0) alert( 'first' );

// inside if result is false, alert will not be executed
if (-1 && 0) alert( 'second' );

// inside if result is true, alert will be executed
if (null || -1 && 1) alert( 'third' );
