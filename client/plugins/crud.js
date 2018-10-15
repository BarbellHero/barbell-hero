// TODO: this will eventually make crud components global

export default ({ app }, inject) => {
  inject("crudBeginEdit", async (apiResource, id) => {
    await app.$apiDispatch(`${apiResource}/editWithId`, id);
  });
};

export function mapProperties(apiResource, propertyNames) {
  const propertyMapping = {};
  propertyNames.forEach(name => {
    propertyMapping[name] = {
      get() {
        const resource = this.$apiState(apiResource).editing;
        return resource[name];
      },
      set(value) {
        this.$apiCommit(`${apiResource}/updateEditing`, {
          [name]: value
        });
        this.$apiCommit(
          `${apiResource}/setEditingIsValid`,
          this.$refs.form.validate()
        );
      }
    };
  });
  return propertyMapping;
}

export function createMountedHook(apiResource) {
  return function() {
    this.$apiCommit(
      `${apiResource}/setEditingIsValid`,
      this.$refs.form.validate()
    );
    this.$refs.form.resetValidation();
  };
}

export function crudOptions(apiResource, propertyNames) {
  return {
    computed: {
      ...mapProperties(apiResource, propertyNames)
    },
    mounted: createMountedHook(apiResource)
  };
}
