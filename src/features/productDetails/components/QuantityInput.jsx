import React, { useRef, useState } from 'react'
import { ActionIcon, Group, NumberInput } from '@mantine/core'

export const QuantityInput = () => {
    const [value, setValue] = useState(1);
    const handlers = useRef();
    return (
        <Group spacing={5}>
            <ActionIcon
                size={38}
                variant="default"
                onClick={() => handlers.current.decrement()}
                disabled={value === 1}
            >
                –
            </ActionIcon>
            <NumberInput
                hideControls
                value={value}
                onChange={(val) => setValue(val)}
                handlersRef={handlers}
                max={20}
                min={1}
                step={1}
                styles={{
                    input: {
                        width: "80px",
                        textAlign: "center",
                    },
                }}
            />

            <ActionIcon
                size={38}
                variant="default"
                onClick={() => handlers.current.increment()}
                disabled={value === 20}
            >
                +
            </ActionIcon>
        </Group>
    )
}

export default QuantityInput;