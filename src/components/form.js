const MyForm = () => {
    return(
    <div className="container">
    <div className="row">
        <div>
            <h1 className="titulo">
                Cadastro de Alunos
            </h1>
            <form className="form">
                <div className="row">
                    <div className="col-lg-4">
                        <label for="nome">Nome</label>
                        <input name="nome" id="nome" className="form-control" placeholder="Informe o nome do aluno"
                            required/>
                    </div>
                    <div className="col-lg-4">
                        <label for="dataCargo">Data</label>
                        <input type="date" name="dataCargo" className="form-control" id="dataCargo"
                            placeholder="Informe a Data"/>
                    </div>
                    <div className="col-lg-4">
                        <label for="CPF">CPF</label>
                        <input name="CPF" className="form-control" id="CPF" placeholder="Informe o CPF do aluno"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <label for="cep">CEP</label>
                        <input name="cep" className="form-control" id="cep" placeholder="Informe o CEP do empregado"/>
                    </div>
                    <div className="col-lg-4">
                        <label for="complemento">Complemento</label>
                        <input name="complemento" className="form-control" id="complemento"
                            placeholder="Informe o complemento"/>
                    </div>
                    <div className="col-lg-4">
                        <label for="numero">Número da Casa</label>
                        <input type="number" name="numero" className="form-control" id="numero"
                            placeholder="Informe o número da casa"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <label for="ddd">DDD</label>
                        <select className="form-select" name="ddd" id="ddd">
                            <option value="45">45</option>
                            <option value="21">21</option>
                            <option value="19">19</option>
                        </select>
                    </div>
                    <div className="col-lg-4">
                        <label for="telefone">Telefone</label>
                        <input maxlength="9" name="telefone" className="form-control" id="telefone"
                            placeholder="Informe o Telefone"/>
                    </div>
                    <div className="col-lg-4">
                        <label for="telefone"></label>
                        <button id="addTelefone" className="botoesADD btn btn-primary">Adicionar Telefone</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <label for="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email"
                            placeholder="Informe o email"/>
                    </div>
                    <div className="col-lg-4">
                        <label for="email"></label>
                        <button id="addEmail" className="botoesADD btn btn-primary">Adicionar Email</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <label for="telefones">Telefones Adicionados</label>
                        <select className="form-select" name="telefones" id="telefones">
                            <option disabled selected>Adicione Telefones</option>
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <label for="email">Emails Adicionados</label>
                        <select className="form-select" name="emails" id="emails">
                            <option disabled selected>Adicione Emails</option>
                        </select>
                    </div>
                </div>


                <div className="final">
                    <button type="button" id="addAluno" className="btnCad btn btn-danger">Cadastrar Aluno</button>
                </div>

                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    <i className="bi bi-check-circle"></i>
                                    Ok
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                O aluno foi cadastrado com sucesso
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModalErro" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    <i className="bi bi-exclamation-circle"></i>
                                    Erro
                                </h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                Preencha todos os campos
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </form>
        </div>
    </div>
    </div>
    );
}

export default MyForm;