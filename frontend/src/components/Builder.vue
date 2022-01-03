<template>
  <div>
    <a-form>
      <a-form-item label="Form name" :labelCol="{ span: 3 }">
        <a-input
          name="formTitle"
          v-model="formDetails.formTitle"
          @change="handleFormDetailsChange"
          placeholder="put your form name here"
        />
      </a-form-item>
      <a-form-item label="Form description" :labelCol="{ span: 3 }">
        <a-input
          name="formDescription"
          v-model="formDetails.formDescription"
          @change="handleFormDetailsChange"
          placeholder="put your form description here"
        />
      </a-form-item>
    </a-form>
    <a-form>
      <div>
        <div
          :key="section.id"
          v-for="section in this.$store.state.formSections"
        >
          <div v-if="section.tag === 'QUESTION'">
            <text-input
              :section="section"
              :handleTitleChange="handleSectionTitleChange"
            />
          </div>
          <div v-else-if="section.tag === 'MULTIPLE_CHOICES'">
            <multiple-choices-input
              :section="section"
              :handleTitleChange="handleSectionTitleChange"
            />
          </div>
          <div v-else-if="section.tag === 'DATE'">
            <date-input
              :section="section"
              :handleTitleChange="handleSectionTitleChange"
            />
          </div>
          <div v-else-if="section.tag === 'TIME'">
            <time-input
              :section="section"
              :handleTitleChange="handleSectionTitleChange"
            />
          </div>
          <div v-else-if="section.tag === 'FILE'">
            <file-input
              :section="section"
              :handleTitleChange="handleSectionTitleChange"
            />
          </div>
        </div>
      </div>
      <a-form-item v-if="this.$store.state.toolbarState">
        <a-row :gutter="{ xs: 8, sm: 16, md: 24 }">
          <a-col :span="5">
            <a-button class="btn__full-size" @click="addSection('QUESTION')"
              >Question</a-button
            >
          </a-col>
          <a-col :span="5">
            <a-button
              class="btn__full-size"
              @click="addSection('MULTIPLE_CHOICES')"
              >Multiple choice</a-button
            >
          </a-col>
          <a-col :span="5">
            <a-button class="btn__full-size" @click="addSection('DATE')"
              >Date</a-button
            >
          </a-col>
          <a-col :span="5">
            <a-button class="btn__full-size" @click="addSection('TIME')"
              >Time</a-button
            >
          </a-col>
          <a-col :span="4">
            <a-button class="btn__full-size" @click="addSection('FILE')"
              >Upload a file</a-button
            >
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item>
        <a-button class="add-field-btn" @click="toggleToolbar()"
          >Add new field</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
import MultipleChoicesInput from '@/components/MultipleChoicesInput.vue'
import DateInput from '@/components/DateInput.vue'
import TimeInput from '@/components/TimeInput.vue'
import FileInput from '@/components/FileInput.vue'

export default {
  name: 'Builder',
  components: {
    TextInput,
    MultipleChoicesInput,
    DateInput,
    TimeInput,
    FileInput
  },
  data() {
    return {
      formDetails: {
        formTitle: '',
        formDescription: ''
      }
    }
  },
  methods: {
    toggleToolbar() {
      this.$store.commit('toggleToolbar')
    },
    addSection(sectionTag) {
      this.$store.commit('addSection', sectionTag)
      this.toggleToolbar()
    },
    handleFormDetailsChange(event) {
      const { name, value } = event.target
      this.$store.commit('setFormDetails', { name, value })
      // TODO: fix v-model with antd
    },
    handleSectionTitleChange(event, sectionId) {
      const { value } = event.target
      this.$store.commit('changeSectionTitle', {
        sectionId,
        sectionTitle: value
      })
    }
  }
}
</script>

<style scoped>
.add-field-btn {
  width: 100%;
}

.btn__full-size {
  width: 100%;
}
</style>
