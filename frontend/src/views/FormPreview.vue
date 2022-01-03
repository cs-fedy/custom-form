<template>
  <layout>
    <a-form>
      <h3 class="form-title">{{ formDetails.formTitle }}</h3>
      <p class="form-description" v-if="formDetails.formDescription">
        {{ formDetails.formDescription }}
      </p>

      <div class="email-section">
        <a-form-item label="Email Address" :labelCol="{ span: 3 }">
          <a-input placeholder="put your email address here" />
        </a-form-item>
      </div>
    </a-form>

    <a-form layout="vertical">
      <div :key="section.id" v-for="section in formSections">
        <div v-if="section.tag === 'QUESTION'">
          <text-section :section="section" />
        </div>
        <div v-else-if="section.tag === 'MULTIPLE_CHOICES'">
          <multiple-choices-section :section="section" />
        </div>
        <div v-else-if="section.tag === 'DATE'">
          <date-section :section="section" />
        </div>
        <div v-else-if="section.tag === 'TIME'">
          <time-section :section="section" />
        </div>
        <div v-else-if="section.tag === 'FILE'">
          <file-section :section="section" />
        </div>
      </div>
      <a-form-item>
        <a-button class="btn__full-size" type="primary">submit</a-button>
      </a-form-item>
    </a-form>
  </layout>
</template>

<script>
import MultipleChoicesSection from '@/components/MultipleChoicesSection.vue'
import TextSection from '@/components/TextSection.vue'
import DateSection from '@/components/DateSection.vue'
import TimeSection from '@/components/TimeSection.vue'
import FileSection from '@/components/FileSection.vue'
import Layout from '@/layout/Layout.vue'

export default {
  name: 'FormPreview',
  components: {
    Layout,
    TextSection,
    MultipleChoicesSection,
    DateSection,
    TimeSection,
    FileSection
  },
  computed: {
    formDetails() {
      return this.$store.state.formDetails
    },
    formSections() {
      return this.$store.state.formSections
    }
  }
}
</script>

<style scoped>
.form-title {
  text-align: center;
  text-transform: capitalize;
}

.form-description {
  text-align: center;
}

.email-section {
  margin: 20px 0;
  padding: 20px 40px 0;
  border: 1px solid #f1f1f1;
}

.btn__full-size {
  width: 100%;
}
</style>
