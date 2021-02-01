export const formStyles = theme => ({

    wrapper: {
        display: "flex",
        flexDirrection: "column"
    },

    formWrapper: {
        position: "absolute",
        top: "59px",
        left: "98px",
        width: "30%",
        zIndex: "100",
        padding: "21px",
        paddingBottom: "33px",
        display: "flex",
        flexDirection: "column"
    },

    formWrapperLogin: {
        width: "36.25rem",
        padding: "3.5rem 7rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    formInput: {
        marginBottom: "25px"
    },

    formInputNotRequired: {
        marginBottom: "0px"
    },

    formWrapperTaxiModify: {
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center"
    },

    redirectToProfile: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        zIndex: "100",
        padding: "21px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center"
    },

    redirectToprofileDesc: {
        fontSize: "18px",
        color: "#7B7B7B",
        marginBottom: "25px"
    },

    selectWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: "23px"
    },

    buttonWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },

    taxiOrderTitle: {
        fontWeith: "700",
        fontSize: "36px",
    },

    taxiOrderDesc: {
        marginBottom: "24px",
        fontSize: "18px",
        color: "#7B7B7B"
    },

    notRequiredForm: {
        color: "red",
        fontSize: "11px"
    },

    notRequiredFormLogin: {
        marginBottom: "25px"
    },

    creditCardLogo: {
        height: "33px",
        display: 'flex',
    },

    creditCardIcon: {
        display: 'flex',
        width: '33px',
        height: '1.75rem'
    },
})

export const selectStyles = {
    control: () => ({
        display: 'flex',
        border: 'none',
        borderBottom: '1px solid #E0E0E0',
    })
}