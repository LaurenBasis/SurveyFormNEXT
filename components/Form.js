const Form = ({ children }) => {

    let fields = ['firstName', 'lastName', 'address'];

    let formFields = fields.map(function(field){
        return (
            <div class="form-group">
                <label for={"Input" + field}>{field}</label>
                <input class="form-control" id={"Input" + field} name={"Input" + field} placeholder="First Name"
                    type="text" />
            </div>
        );
    });

    return (
        <form onsubmit="handleFormSubmit(this)" action="/" method="POST">
            {formFields}
            <input id="idfromurl" name="idfromurl" type="hidden" />
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
            { children }
        </form>
    );
}

export default Form;