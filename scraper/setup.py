from setuptools import find_packages,setup
from  typing import List 

HYPHEN_E_DOT='-e .'

# this function read requirements.txt line by line and return list of requriments
def get_requirements(file_path:str)->List[str]:
    requirements=[]
    with open (file_path) as file:
        requirements=file.readlines()
        requirements=[req.replace("\n","") for req in requirements] # this line use for to \n to null it may create to read the requirements.txt
        if HYPHEN_E_DOT in requirements:
            requirements.remove(HYPHEN_E_DOT)
    return requirements
setup(
    name="Radhe",
    version='0.0.1',
    author="Radhe",
    author_email="subhadippratihar09@gmail.com",
    packages=find_packages(),
    install_requires=get_requirements('requirements.txt')

)