var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Category Model
 * ==========
 */
var Category = new keystone.List('Category', {
  track: true,
  autokey: {
    from: 'name',
    path: 'slug',
    unique: true
  }
});

Category.add({
	name: { type: Types.Text, initial: true },
  slug: { type: Types.Key }
});

Category.defaultColumns = 'title';
Category.register();
