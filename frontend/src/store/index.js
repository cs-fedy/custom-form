import { createStore } from 'vuex'
import { v1 } from 'uuid'

export default createStore({
  state: {
    //* 1: toolbar is active - 0: toolbar isn't active
    toolbarState: false,
    formSections: [],
    formDetails: {
      formTitle: 'untitled form',
      formDescription: ''
    }
  },
  mutations: {
    toggleToolbar(state) {
      state.toolbarState = !state.toolbarState
    },
    addSection(state, sectionTag) {
      state.formSections = [
        ...state.formSections,
        {
          id: v1(),
          title: '',
          tag: sectionTag,
          required: false
        }
      ]
    },
    duplicateSection(state, sectionId) {
      const index = state.formSections.findIndex(
        (section) => section.id === sectionId
      )
      state.formSections.splice(index, 0, {
        ...state.formSections[index],
        id: v1()
      })
    },
    removeSection(state, sectionId) {
      state.formSections = state.formSections.filter(
        (section) => section.id !== sectionId
      )
    },
    toggleParagraph(state, sectionId) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId)
          return { ...section, isParagraph: !section.isParagraph }
        return section
      })
    },
    toggleRequire(state, sectionId) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId)
          return { ...section, required: !section.required }
        return section
      })
    },
    toggleRadio(state, sectionId) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId)
          return { ...section, isRadio: !section.isRadio }
        return section
      })
    },
    setFormDetails(state, { name, value }) {
      state.formDetails = { ...state.formDetails, [name]: value }
    },
    addNewOption(state, { sectionId, newOption }) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId)
          return {
            ...section,
            options: [...(section.options || []), newOption]
          }
        return section
      })
    },
    removeOption(state, { sectionId, optionIndex }) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId) section.options.splice(optionIndex, 1)
        return section
      })
    },
    changeSectionTitle(state, { sectionId, sectionTitle }) {
      state.formSections = state.formSections.map((section) => {
        if (section.id === sectionId)
          return {
            ...section,
            title: sectionTitle
          }
        return section
      })
    }
  },
  actions: {},
  modules: {}
})
