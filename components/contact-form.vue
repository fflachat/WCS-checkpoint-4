<template>
    <section class="contact-form">
        <h2>Contactez nous :</h2>
        <b-field horizontal label="Subject" type="is-danger" message="Please enter a subject">
            <b-input name="subject" expanded></b-input>
        </b-field>

        <b-field horizontal label="From">
            <b-input name="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" placeholder="nobody@nowhere.com" expanded></b-input>
        </b-field>

        <b-field horizontal label="Message">
            <b-input type="textarea"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
                <b-button label="Send message" type="is-primary" />
            </p>
        </b-field>

    </section>
</template>


<style scoped>

.contact-form{
    width: 50%;
    padding:20px;
}

</style>