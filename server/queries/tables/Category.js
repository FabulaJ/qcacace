// Custom functions
const global = require('../../functions/global');
const Builder = require('../../functions/builder');

class Category {
    list = async () => { return (await new Builder(`tbl_pet_category`).select().condition(`ORDER BY date_created DESC`).build()).rows; }
    search = async (data) => { return (await new Builder(`tbl_pet_category`).select().condition(`WHERE name LIKE '%${data.condition}%' OR series_no LIKE '%${data.condition}%' ORDER BY date_created DESC`).build()).rows; }
    specific = async (id) => { return (await new Builder(`tbl_pet_category`).select().condition(`WHERE id= ${id}`).build()).rows; }
    dropdown = async () => { return (await new Builder(`tbl_pet_category`).select(`id, name`).condition(`WHERE status= 1 ORDER BY name ASC`).build()).rows; }

    save = async (data) => {
        if(!(await new Builder(`tbl_pet_category`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build()).rowCount > 0) {
            await new Builder(`tbl_pet_category`).insert({ columns: `series_no, name, status, created_by, date_created`, values: `'${(data.series_no).toUpperCase()}', '${(data.name).toUpperCase()}', ${data.status ? 1 : 0}, ${data.created_by}, CURRENT_TIMESTAMP` }).build();
            return { result: 'success', message: 'Successfully saved!' }
        }
        else { return { result: 'error', error: [{ name: 'name', message: 'Category already exist!' }] } }
    }

    update = async (data) => {
        let ctg = (await new Builder(`tbl_pet_category`).select().condition(`WHERE id= ${data.id}`).build()).rows[0];
        let date = global.date(new Date());

        if(global.compare(ctg.name, data.name)) {
            if(!(await new Builder(`tbl_pet_category`).select().condition(`WHERE name= '${(data.name).toUpperCase()}'`).build()).rowCount > 0) { await new Builder(`tbl_pet_category`).update(`name= '${(data.name).toUpperCase()}'`).condition(`WHERE id= ${ctg.id}`).build(); }
            else { return { result: 'error', error: [{ name: 'name', message: 'Category already exist!' }] } }
        }

        if(global.compare(ctg.status, data.status ? 1 : 0)) { await new Builder(`tbl_pet_category`).update(`status= ${data.status === true || data.status === 'true' ? 1 : 0}`).condition(`WHERE id= ${ctg.id}`).build(); }

        await new Builder(`tbl_pet_category`).update(`updated_by= ${data.updated_by}, date_created= '${date}'`).condition(`WHERE id= ${ctg.id}`).build();
        return { result: 'success', message: 'Successfully updated!' }
    }
}

module.exports = Category;