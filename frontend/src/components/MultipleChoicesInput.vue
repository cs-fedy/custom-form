<template>
  <div class="text-input">
    <a-form-item label="Question" :labelCol="{ span: 3 }">
      <a-input
        placeholder="put your question here"
        @change="handleTitleChange($event, section.id)"
      />
    </a-form-item>
    <div>
      <a-form-item label="Option" :labelCol="{ span: 3 }">
        <a-input
          @pressEnter="handdleNewOption"
          placeholder="put your question here"
        />
      </a-form-item>
      <a-list>
        <a-list-item :key="index" v-for="(option, index) in section.options">
          <a-row class="option-item" type="flex" justify="space-between">
            <a-col :span="7"> {{ option }} </a-col>
            <a-col :span="1" :offset="15">
              <a-button type="link" @click="handleRemoveOption(index)">
                remove
              </a-button>
            </a-col>
          </a-row>
        </a-list-item>
      </a-list>
    </div>
    <a-divider />
    <card-toolbar tag="choice" :section="section" />
  </div>
</template>

<script>
import CardToolbar from '@/components/CardToolbar.vue'

export default {
  name: 'MultipleChoicesInput',
  components: { CardToolbar },
  props: {
    section: {
      required: true
    },
    handleTitleChange: {
      required: true
    }
  },
  methods: {
    handdleNewOption(event) {
      const { value } = event.target
      this.$store.commit('addNewOption', {
        sectionId: this.section.id,
        newOption: value
      })
      event.target.value = ''
      // TODO: use v-model
    },
    handleRemoveOption(optionIndex) {
      this.$store.commit('removeOption', {
        sectionId: this.section.id,
        optionIndex
      })
    }
  }
}
</script>

<style scoped>
.text-input {
  margin: 20px 0;
  padding: 20px 40px;
  border: 1px solid #f1f1f1;
}

.option-item {
  width: 100%;
}
</style>
