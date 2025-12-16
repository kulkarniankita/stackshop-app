interface FieldErrorProps {
  errors?: unknown
  className?: string
}

export function FieldError({ errors, className }: FieldErrorProps) {
  if (!errors) {
    return null
  }

  // Handle array of errors
  if (Array.isArray(errors)) {
    if (errors.length === 0) {
      return null
    }
    const firstError = errors[0]
    const errorMessage =
      typeof firstError === 'string'
        ? firstError
        : typeof firstError === 'object' &&
            firstError !== null &&
            'message' in firstError
          ? String(firstError.message ?? 'Invalid value')
          : 'Invalid value'

    return (
      <p className={`text-sm text-destructive ${className ?? ''}`}>
        {errorMessage}
      </p>
    )
  }

  // Handle single error (string or object)
  const errorMessage =
    typeof errors === 'string'
      ? errors
      : typeof errors === 'object' && errors !== null && 'message' in errors
        ? String(errors.message ?? 'Invalid value')
        : 'Invalid value'

  return (
    <p className={`text-sm text-destructive ${className ?? ''}`}>
      {errorMessage}
    </p>
  )
}
