import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import PageHeader from "../page-header";

describe("page-header component", () => {
  let wrapper;
  let $router;
  let title;

  beforeEach(() => {
    $router = {
      go: jest.fn()
    };
    const localVue = createLocalVue();
    localVue.use(Vuetify);
    title = "cool title";

    wrapper = mount(PageHeader, {
      localVue,
      props: {
        title
      },
      mocks: {
        $router
      }
    });
  });

  it("should go back one page when clicking back button", () => {
    const button = wrapper.find("#back-button");
    button.trigger("click");
    expect($router.go).toHaveBeenCalledWith(-1);
  });
});
