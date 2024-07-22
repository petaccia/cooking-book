import React from 'react'
import ButtonCreateRecipe from '../../CreateRecipe/components/ButtonCreateRecipe'
import InputTitle from '../inputForm/InputTitle'
import InputImage from '../inputForm/InputImage'
import TextareaDescription from '../TextareaDescription'
import SelectCookingTime from '../selectForm/SelectCookingTime'
import SelectLevel from '../selectForm/SelectLevel'
import SelectIngredients from '../selectedIngredient/SelectIngredients'
import InputSteps from '../inputForm/InputSteps'

const FormRecipe = ({onSubmit, handleSubmit, register, errors, formState, setFormState}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputTitle register={register} errors={errors} />
      <InputImage register={register} errors={errors} />
    </div>
    <TextareaDescription register={register} errors={errors} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SelectCookingTime register={register} errors={errors} />
      <SelectLevel register={register} errors={errors} />
    </div>
    <SelectIngredients
      register={register}
      selectedIngredients={formState.selectedIngredients}
      setSelectedIngredients={(selectedIngredients) =>
        setFormState((prevState) => ({ ...prevState, selectedIngredients }))
      }
    />
    <InputSteps
      register={register}
      errors={errors}
      steps={formState.steps}
      setSteps={(steps) =>
        setFormState((prevState) => ({ ...prevState, steps }))
      }
    />
    <ButtonCreateRecipe />
  </form>

  )
}

export default FormRecipe