const Form = () => {
    return (
        <form onsubmit="handleFormSubmit(this)" action="/" method="POST">
            <div class="form-group">
                <label for="InputFirstName">First Name</label>
                <input class="form-control" id="InputFirstName" name="InputFirstName" placeholder="First Name"
                    type="text" />
            </div>
            <div class="form-group">
                <label for="InputLastName">Last Name</label>
                <input class="form-control" id="InputLastName" name="InputLastName" placeholder="Last Name" type="text" />
            </div>
            <input id="idfromurl" name="idfromurl" type="hidden" />
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;