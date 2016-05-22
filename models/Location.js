var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Location Model
 * ==========
 */
var Location = new keystone.List('Location', { track: true });

Location.add({
	name: { type: Types.Text, initial: true, required: true },
	description: { type: Types.Textarea, initial: true },
	link: { type: Types.Url, initial: true },
	location: { type: Types.Location, initial: true, enableMapsAPI:true },
	category: { type: Types.Relationship, initial: true, ref: 'Category' }
});

Location.schema.add({
	googleLocation: {}
});

Location.defaultColumns = 'title, category, description, location';
Location.register();
